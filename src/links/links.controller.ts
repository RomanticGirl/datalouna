import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LinksService } from './links.service';

@Controller('/')
export class LinksController {
  constructor(
    private readonly linksService: LinksService
  ) { }


  @Get()
  async endpoint_1(): Promise<any> {
    return await this.linksService.endpoint_1();
  }
}
