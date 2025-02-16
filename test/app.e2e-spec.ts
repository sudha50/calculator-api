import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
  it('/calculator/add (GET)', () => {
    return request(app.getHttpServer())
      .get('/calculator/add?a=1&b=2')
      .expect(200)
      .expect(3);
  });
  it('/calculator/subtract (GET)', () => {
    return request(app.getHttpServer())
      .get('/calculator/subtract?a=5&b=3')
      .expect(200)
      .expect(2);
  });
  it('/calculator/multiply (GET)', () => {
    return request(app.getHttpServer())
      .get('/calculator/multiply?a=2&b=3')
      .expect(200)
      .expect(6);
  });
});
