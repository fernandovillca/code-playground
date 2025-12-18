import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //solo permite las propiedades definidas en el DTO
      forbidNonWhitelisted: true, //lanza un error si hay propiedades no definidas en el DTO
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
