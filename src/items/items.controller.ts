import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('/')
export class ItemsController {
  constructor(
    private readonly itemsService: ItemsService
  ) { }


  @Get('items')
  async endpoint_1(): Promise<any> {
    return await this.itemsService.endpoint_1();
  }

  @Get('buy')
  async endpoint_2(): Promise<any> {
    return await this.itemsService.endpoint_2();
  }

}
