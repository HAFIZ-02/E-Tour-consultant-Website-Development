import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from '../email/email.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from '@prisma/client';

@Injectable()
export class BookingService {
  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
  ) {}

  async create(createBookingDto: CreateBookingDto) {
    const { serviceType, serviceId, numberOfPeople, ...bookingData } = createBookingDto;

    // Get service price
    let servicePrice = 0;
    if (serviceType === 'package') {
      const pkg = await this.prisma.tourPackage.findUnique({
        where: { id: serviceId },
      });
      servicePrice = pkg?.price || 0;
    } else {
      const transport = await this.prisma.transport.findUnique({
        where: { id: serviceId },
      });
      servicePrice = transport?.price || 0;
    }

    const totalPrice = servicePrice * numberOfPeople;
    const receiptId = `RCP-${Date.now().toString().slice(-8)}`;

    // Create booking
    const booking = await this.prisma.booking.create({
      data: {
        ...bookingData,
        serviceType,
        serviceId,
        numberOfPeople,
        totalPrice,
        receiptId,
        date: new Date(bookingData.date),
      },
    });

    // Send confirmation emails
    try {
      await this.emailService.sendBookingConfirmation(booking);
    } catch (error) {
      console.error('Failed to send email:', error);
      // Don't fail the booking if email fails
    }

    return {
      success: true,
      data: {
        id: booking.id,
        receiptId: booking.receiptId,
        status: booking.status,
        createdAt: booking.createdAt,
        totalPrice: booking.totalPrice,
      },
      message: 'Booking created successfully',
    };
  }

  async findOne(id: string): Promise<Booking> {
    return this.prisma.booking.findUnique({
      where: { id },
    });
  }

  async verifyEmail(email: string) {
    // Simple email verification - in production, use a proper email verification service
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    return {
      success: true,
      data: { isValid },
      message: isValid ? 'Email is valid' : 'Email format is invalid',
    };
  }
}
