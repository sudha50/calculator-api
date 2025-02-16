import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatorService],
    }).compile();

    service = module.get<CalculatorService>(CalculatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('add', () => {
    it('should return the sum of two numbers', () => {
      expect(service.add(1, 2)).toBe(3);
      expect(service.add(-1, 1)).toBe(0);
    });
  });

  describe('subtract', () => {
    it('should return the difference of two numbers', () => {
      expect(service.subtract(5, 3)).toBe(2);
      expect(service.subtract(0, 0)).toBe(0);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      expect(service.multiply(2, 3)).toBe(6);
      expect(service.multiply(-1, 1)).toBe(-1);
    });
  });
  describe('divide', () => {
    it('should return the quotient of two numbers', () => {
      expect(service.divide(10, 2)).toBe(5);
      expect(service.divide(0, 2)).toBe(0);
    });
    it('should throw an error when dividing by zero', () => {
      expect(() => service.divide(10, 0)).toThrowError('Division by zero is not allowed');
    });
    it('should handle negative numbers', () => {
      expect(service.divide(-10, 2)).toBe(-5);
      expect(service.divide(10, -2)).toBe(-5);
    });
});
});