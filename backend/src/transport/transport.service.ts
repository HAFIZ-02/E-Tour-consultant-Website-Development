import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Transport } from '@prisma/client';

@Injectable()
export class TransportService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Transport[]> {
    return this.prisma.transport.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByType(type: string): Promise<Transport[]> {
    return this.prisma.transport.findMany({
      where: { type },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string): Promise<Transport> {
    return this.prisma.transport.findUnique({
      where: { id },
    });
  }
}
