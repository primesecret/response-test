import { Injectable } from '@nestjs/common';
import { User } from './entity/User.entity';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  signin(): any {
    return  {
      "id": 2,
      "name": "Prieyudha Akadita S",
      "email": "ydhnwb@gmail.com",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMiIsImV4cCI6MTY1MTgyMDAwMCwiaWF0IjoxNjIwMjg0MDAwLCJpc3MiOiJhZG1pbiJ9.HtnuWlBaevEO3fHAI4McH5W8axvw_3Og47RUI3m9IyI"
    }
  }

  async signup(signupUser: User): Promise<void> {
    await setTimeout(() => {
      console.log('sign up success');
    }, 1500);
  }
}
