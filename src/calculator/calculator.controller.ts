import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Get('add')
  add(@Query('a') a: string, @Query('b') b: string): number {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
      throw new BadRequestException('Invalid input');
    }
    return this.calculatorService.add(numA, numB);
  }

  @Get('subtract')
  subtract(@Query('a') a: string, @Query('b') b: string): number {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
      throw new BadRequestException('Invalid input');
    }
    return this.calculatorService.subtract(numA, numB);
  }

  @Get('multiply')
  multiply(@Query('a') a: string, @Query('b') b: string): number {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
      throw new BadRequestException('Invalid input');
    }
    return this.calculatorService.multiply(numA, numB);
  }
}