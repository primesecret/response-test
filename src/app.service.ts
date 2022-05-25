import { Injectable } from '@nestjs/common';
import { User } from './entity/User.entity';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async signup(signupUser: User): Promise<void> {
    await setTimeout(() => {
      console.log('sign up success');
    }, 1500);
  }
}
