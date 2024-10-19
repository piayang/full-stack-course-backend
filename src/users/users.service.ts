import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  hello(): string {
    return 'user hello';
  }
  userInfor(): { name: string; age: number } {
    return { name: 'Pia YANG', age: 30 };
  }
  user_infor({ name, age }: { name: string; age: number }): {
    myname: string;
    myage: number;
  } {
    console.log({ name, age });
    return { myname: name + 'abc', myage: age };
  }
}
