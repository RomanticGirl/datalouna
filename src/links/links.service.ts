import { Injectable } from '@nestjs/common';
import axios from 'axios';

console.log(axios.isCancel('something'));

@Injectable()
export class LinksService {
  constructor(
  ) { }



  // Подключитесь к списку предметов Skinport(ссылка на API: https://docs.skinport.com/#items). 
  //  • Верните массив объектов, в котором для каждого предмета указаны две минимальные цены:
  //  одна для предмета с параметром tradable, другая — без.
  //  • Параметры app_id и currency задайте по умолчанию. • Postgres здесь использовать не нужно.
  async endpoint_1(): Promise<string> {
    try {
      const responseSkinport = await axios.get('https://api.skinport.com/v1/items?tradable=0');
      const responseSkinportTradable = await axios.get('https://api.skinport.com/v1/items?tradable=1');
      console.log(responseSkinport);
    } catch (error) {
      console.error(error);
    }


    return 'стороннее апи';
  }
}
