import { NestFactory } from '@nestjs/core';
import { MemosModule } from './memos.module';

async function bootstrap() {
  const app = await NestFactory.create(MemosModule);
  await app.listen(3000);
}
bootstrap();
