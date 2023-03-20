import { Test, TestingModule } from '@nestjs/testing';
import { MemosController } from './memos.controller';
import { MemosService } from './memos.service';

describe('MemosController', () => {
  let memosController: MemosController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MemosController],
      providers: [MemosService],
    }).compile();

    memosController = app.get<MemosController>(MemosController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(memosController.getHello()).toBe('Hello World!');
    });
  });
});
