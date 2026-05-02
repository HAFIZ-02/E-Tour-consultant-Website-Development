import { Controller, Get, Param, Query } from '@nestjs/common';
import { PackagesService } from './packages.service';
import { TourPackage } from '@prisma/client';

@Controller('packages')
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) {}

  @Get()
  async findAll(): Promise<TourPackage[]> {
    return this.packagesService.findAll();
  }

  @Get('category/:category')
  async findByCategory(@Param('category') category: string): Promise<TourPackage[]> {
    return this.packagesService.findByCategory(category);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TourPackage> {
    return this.packagesService.findOne(id);
  }
}
