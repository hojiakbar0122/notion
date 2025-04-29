import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  try {
    const PORT = process.env.PORT || 3001
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
      .setTitle("Nest-One project")
      .setDescription("NestJs Api")
      .setVersion("1.0")
      .addTag("NestJs", "Validation")
      .addBearerAuth()
      .build()

      const document = SwaggerModule.createDocument(app, config)
      SwaggerModule.setup("docs", app, document)
    await app.listen(PORT, ()=>{
      console.log(`Server started at: http://localhost:${PORT}`);
      
    });
  } catch (error) {
    console.log(error);
    
  }
  
}
start();
