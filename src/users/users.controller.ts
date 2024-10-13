import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('hello') // method GET
  hello(): string {
    return `abc`;
  }
  @Get('user')
  myname(): { name: string; age: number } {
    return { name: 'Pia YANG', age: 30 };
  }

  @Post('create')
  create(@Body() { name, age }: { name: string; age: number }): {
    myname: string;
    myage: number;
  } {
    console.log({ name, age });
    return { myname: name + 'abc', myage: age };
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
