import { Module } from '@nestjs/common';
import { MemosController } from './memos.controller';
import { MemosService } from './memos.service';

@Module({
  imports: [],
  controllers: [MemosController],
  providers: [MemosService],
})
export class MemosModule {}
