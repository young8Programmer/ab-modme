// component testlari yaratildi
import { Test, TestingModule } from '@nestjs/testing';
// kod uslubini yaxshilash
import { INestApplication } from '@nestjs/common';
// integration testlar yaratildi
import * as request from 'supertest';
// unit testlar qo'shildi
import { AppModule } from './../src/app.module';
// user authentication qo'shildi

describe('AppController (e2e)', () => {
  let app: INestApplication;

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
});
