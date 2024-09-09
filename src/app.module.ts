import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from './config/env-validation.config';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { PlatformModule } from './platform/platform.module';
import { UserModule } from './user/user.module';
import { UserSubscriptionModule } from './user-subscription/user-subscription.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: configValidationSchema,
      envFilePath: '.env',
    }),
    AuthModule,
    CategoryModule,
    PlatformModule,
    UserModule,
    UserSubscriptionModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// export { typeOrmModuleOptions };
