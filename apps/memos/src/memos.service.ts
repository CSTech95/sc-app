import { Injectable } from '@nestjs/common';

@Injectable()
export class MemosService {
  getHello(): string {
    return 'Hello World!';
  }
}
