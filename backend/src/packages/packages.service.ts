import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TourPackage } from '@prisma/client';

@Injectable()
export class PackagesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<TourPackage[]> {
    return this.prisma.tourPackage.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByCategory(category: string): Promise<TourPackage[]> {
    return this.prisma.tourPackage.findMany({
      where: { category },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string): Promise<TourPackage> {
    return this.prisma.tourPackage.findUnique({
      where: { id },
    });
  }
}
