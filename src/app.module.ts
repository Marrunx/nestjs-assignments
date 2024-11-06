import { Module } from '@nestjs/common';
import { AssignmentController } from './assignments/assignments.controller';

@Module({
  imports: [],
  controllers: [AssignmentController],
  providers: [],
})
export class AppModule {}
