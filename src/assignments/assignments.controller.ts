import { Controller, Get, Param, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';

@Controller('assignments')
export class AssignmentController {
  //START 
  private isPrime(num: number): boolean {
    if (num <= 1) return false; 
    if (num <= 3) return true;  
    if (num % 2 === 0 || num % 3 === 0) return false; 

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  //END POINT
  @Get('prime/:number')
  checkPrime(@Param('number', ParseIntPipe) number: number): { isPrime: boolean } {
    if (number < 0) {
      throw new HttpException('Enter a positive Interger.', HttpStatus.BAD_REQUEST);
    }
    const result = this.isPrime(number);
    return { isPrime: result };
  }
}
