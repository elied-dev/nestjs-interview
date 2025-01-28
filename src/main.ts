import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger } from '@nestjs/common';

async function bootstrap() {
  const logger = new ConsoleLogger('Bootstrap', {
    json: false,
    timestamp: true,
    prefix: 'Bootstrap',

  })
  const app = await NestFactory.create(AppModule, {
    logger,
  });
  await app.listen(3000);
  logger.log('Application is running on port 3000');
  
}
bootstrap();
