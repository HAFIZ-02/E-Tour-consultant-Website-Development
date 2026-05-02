import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { Booking } from '@prisma/client';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASS'),
      },
    });
  }

  async sendBookingConfirmation(booking: Booking) {
    const customerEmailHtml = this.generateCustomerEmailHtml(booking);
    const adminEmailHtml = this.generateAdminEmailHtml(booking);

    // Send to customer
    await this.transporter.sendMail({
      from: this.configService.get<string>('EMAIL_FROM'),
      to: booking.email,
      subject: 'Booking Confirmation - Tour Consultant',
      html: customerEmailHtml,
    });

    // Send to admin
    await this.transporter.sendMail({
      from: this.configService.get<string>('EMAIL_FROM'),
      to: this.configService.get<string>('EMAIL_USER'), // Admin email
      subject: 'New Booking Received - Tour Consultant',
      html: adminEmailHtml,
    });
  }

  private generateCustomerEmailHtml(booking: Booking): string {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    });

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Booking Confirmation</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0f766e, #14b8a6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .receipt { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0f766e; }
            .total { font-size: 24px; font-weight: bold; color: #0f766e; text-align: center; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌍 Tour Consultant</h1>
              <h2>Booking Confirmation</h2>
            </div>

            <div class="content">
              <p>Dear <strong>${booking.name}</strong>,</p>

              <p>Thank you for choosing Tour Consultant! Your booking has been confirmed successfully.</p>

              <div class="receipt">
                <h3>Booking Details</h3>
                <p><strong>Receipt ID:</strong> ${booking.receiptId}</p>
                <p><strong>Booking Date:</strong> ${booking.createdAt.toLocaleDateString('id-ID')}</p>
                <p><strong>Tour Date:</strong> ${booking.date.toLocaleDateString('id-ID')}</p>
                <p><strong>Number of People:</strong> ${booking.numberOfPeople}</p>
                <p><strong>Service Type:</strong> ${booking.serviceType}</p>
                ${booking.notes ? `<p><strong>Notes:</strong> ${booking.notes}</p>` : ''}

                <div class="total">
                  Total Amount: ${formatter.format(booking.totalPrice)}
                </div>
              </div>

              <h3>What's Next?</h3>
              <ol>
                <li>Our team will contact you within 24 hours to confirm the details</li>
                <li>Payment instructions will be provided via email or phone</li>
                <li>You will receive a final confirmation 7 days before your tour date</li>
                <li>Don't forget to bring valid ID and comfortable clothing</li>
              </ol>

              <p>If you have any questions, please contact us at:</p>
              <p><strong>Email:</strong> info@tour-consultant.com</p>
              <p><strong>Phone:</strong> +62 xxx xxx xxxx</p>

              <div class="footer">
                <p>© 2024 Tour Consultant. All rights reserved.</p>
                <p>Explore the beauty of Sumatera Barat with us!</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;
  }

  private generateAdminEmailHtml(booking: Booking): string {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    });

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Booking Received</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #dc2626, #ef4444); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .booking-info { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626; }
            .contact-info { background: #e5e7eb; padding: 15px; border-radius: 8px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔔 New Booking Alert</h1>
              <h2>Tour Consultant</h2>
            </div>

            <div class="content">
              <p><strong>New booking received!</strong></p>

              <div class="booking-info">
                <h3>Customer Information</h3>
                <p><strong>Name:</strong> ${booking.name}</p>
                <p><strong>Email:</strong> ${booking.email}</p>
                <p><strong>Phone:</strong> ${booking.phone}</p>
                <p><strong>Receipt ID:</strong> ${booking.receiptId}</p>
                <p><strong>Booking Date:</strong> ${booking.createdAt.toLocaleDateString('id-ID')}</p>
                <p><strong>Tour Date:</strong> ${booking.date.toLocaleDateString('id-ID')}</p>
                <p><strong>Number of People:</strong> ${booking.numberOfPeople}</p>
                <p><strong>Service Type:</strong> ${booking.serviceType}</p>
                <p><strong>Service ID:</strong> ${booking.serviceId}</p>
                <p><strong>Total Amount:</strong> ${formatter.format(booking.totalPrice)}</p>
                ${booking.notes ? `<p><strong>Notes:</strong> ${booking.notes}</p>` : ''}
              </div>

              <div class="contact-info">
                <h4>📞 Contact Customer</h4>
                <p><strong>Email:</strong> <a href="mailto:${booking.email}">${booking.email}</a></p>
                <p><strong>Phone:</strong> ${booking.phone}</p>
              </div>

              <p><strong>Action Required:</strong></p>
              <ul>
                <li>Contact the customer within 24 hours</li>
                <li>Confirm booking details and availability</li>
                <li>Provide payment instructions</li>
                <li>Send final confirmation 7 days before tour date</li>
              </ul>

              <p style="color: #dc2626; font-weight: bold;">
                ⚠️ Please respond to this booking promptly to ensure customer satisfaction.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;
  }
}
