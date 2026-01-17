import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// type error tuzatildi
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
// kod formatlash va indentatsiya
  await app.listen(3000);
// changelog yangilandi
}
bootstrap();