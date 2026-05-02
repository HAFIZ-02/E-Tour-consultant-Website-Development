import { Controller, Get, Param, Query } from '@nestjs/common';
import { TransportService } from './transport.service';
import { Transport } from '@prisma/client';

@Controller('transport')
export class TransportController {
  constructor(private readonly transportService: TransportService) {}

  @Get()
  async findAll(@Query('type') type?: string): Promise<Transport[]> {
    if (type) {
      return this.transportService.findByType(type);
    }
    return this.transportService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Transport> {
    return this.transportService.findOne(id);
  }
}
