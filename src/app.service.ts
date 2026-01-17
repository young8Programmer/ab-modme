import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
// CI/CD pipeline sozlandi
// integration testlar yaratildi
// installation qo'llanmasi yaratildi
  }
}
