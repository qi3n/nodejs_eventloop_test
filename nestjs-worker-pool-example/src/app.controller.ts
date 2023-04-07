import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { WorkerPool } from './worker.pool';
import { Logger } from "@nestjs/common";
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly pool: WorkerPool,
  ) {}

private readonly logger = new Logger(AppController.name);

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/fib')
  getFib(): Promise<number> {
    this.logger.debug(`fib 6`);
    return this.pool.fib(6);
  }
}
