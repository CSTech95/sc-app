import { Controller, Get } from '@nestjs/common';
import { MemosService } from './memos.service';

@Controller()
export class MemosController {
  constructor(private readonly memosService: MemosService) {}

  @Get()
  getHello(): string {
    return this.memosService.getHello();
  }
}
