import { IsString, IsEmail, IsDateString, IsInt, Min, IsOptional, IsEnum } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsDateString()
  date: string;

  @IsInt()
  @Min(1)
  numberOfPeople: number;

  @IsEnum(['package', 'transport'])
  serviceType: 'package' | 'transport';

  @IsString()
  serviceId: string;

  @IsOptional()
  @IsString()
  notes?: string;
}
