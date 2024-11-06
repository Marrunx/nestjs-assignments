import { Controller, Get, Param, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
//START
  private generateFibonacci(n: number): number[] { 
    if (n <= 0) return [];
    if (n === 1) return [0];
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
//END POINT
  @Get('fibonacci/:n')
  getFibonacci(@Param('n', ParseIntPipe) n: number): { sequence: number[] } {
    if (n < 0) {
      throw new HttpException('Error, N must be a non-negative Integer.', HttpStatus.BAD_REQUEST);
    }
    const sequence = this.generateFibonacci(n);
    return { sequence };
  }
}
