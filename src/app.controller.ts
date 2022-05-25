import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseEntity } from './common/ResponseEntity';
import { UserShowDto } from './dto/UserShowDto';
import { User } from './entity/User.entity';
import { LocalDateTime } from 'js-joda';
import { UserSignupReq } from './dto/UserSignupReq';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger
  ) {}

  @Get()
  getHello(): ResponseEntity<string> {
    this.logger.info('>>>>>>>>>>> Test');
    return ResponseEntity.OK_WITH(this.appService.getHello());
  }

  @Get('/show')
  show(): ResponseEntity<UserShowDto> {
    return ResponseEntity.OK_WITH(
      new UserShowDto(
        User.signup('KilDong', 'Hong', LocalDateTime.of(2021, 10, 17, 0, 0, 0)),
      ),
    );
  }

  @Post('/signup')
  async signup(@Body() dto: UserSignupReq): Promise<ResponseEntity<string>> {
    try {
      // await this.appService.signup(dto.toEntity());
      return ResponseEntity.OK();
    } catch (e) {
      this.logger.error(`dto = ${JSON.stringify(dto)}`, e);
      return ResponseEntity.ERROR_WITH('회원 가입에 실패하였습니다.');
    }
  }
}
