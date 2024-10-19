import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('hello') // method GET
  Gethello(): string {
    return this.userService.hello();
  }

  // @Get('user')
  // userInfor(): { name: string; age: number } {
  //   return this.userService.userInfor{name,age}
  // }

  @Post('user_infor')
  user_infor1(@Body() { name, age }: { name: string; age: number }): {
    myname: string;
    myage: number;
  } {
    return this.userService.user_infor({ name, age });
  }

  @Put('update/:id')
  update(@Param() { id }: { id: string }): string {
    return id;
  }

  @Get('findoneuser')
  findOne(@Query() { id }: { id: string; name: string }): string {
    return id;
  }
}
