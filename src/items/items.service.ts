import { Injectable } from '@nestjs/common';
import axios from 'axios';

console.log(axios.isCancel('something'));

@Injectable()
export class ItemsService {
  constructor(
  ) { }



  // Подключитесь к списку предметов Skinport(ссылка на API: https://docs.skinport.com/#items). 
  //  • Верните массив объектов, в котором для каждого предмета указаны две минимальные цены:
  //  одна для предмета с параметром tradable, другая — без.
  //  • Параметры app_id и currency задайте по умолчанию. • Postgres здесь использовать не нужно.
  async endpoint_1(): Promise<string> {
    try {
      // const responseSkinport = await axios.get('https://api.skinport.com/v1/items?tradable=0');

      const responseSkinportTradable = await axios.get('https://api.skinport.com/v1/items',
        {
          method: 'GET',
          url: 'https://api.skinport.com/v1/items',
          params: {
            app_id: 730,
            currency: 'RUB',
            tradable: 1,
          }
        }
      );
      console.log(responseSkinportTradable);
    } catch (error) {
      console.error(error);
    }


    return 'стороннее апи';
  }
  // 2. Endpoint 2:
  // • Реализуйте процесс покупки предмета пользователем.
  // У пользователя должен быть баланс, который можно использовать для покупки.
  async endpoint_2(): Promise<string> {



    return 'процесс покупки предмета пользователем';
  }
}
