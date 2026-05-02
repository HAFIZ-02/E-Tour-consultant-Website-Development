# Tour Consultant - Fullstack Application

Complete tour booking and management system for exploring Sumatera Barat with responsive web interface and robust backend.

## 📋 Project Overview

Tour Consultant is a comprehensive tour booking platform featuring:
- ✅ Browse & book tour packages by category
- ✅ Flight, bus, and car rental booking
- ✅ User-friendly booking form
- ✅ Email confirmations and receipts
- ✅ Admin management system

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI**: React Icons, React Hot Toast
- **HTTP**: Axios
- **Validation**: Zod, React Hook Form

### Backend
- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: PostgreSQL (or SQLite for development)
- **ORM**: Prisma
- **Email**: Nodemailer
- **API**: REST

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- PostgreSQL (optional, SQLite for dev)
  
## 📖 Features

### 1. Tour Packages
- 10 curated packages from Sumatera Barat
- Categories: Pantai, Gunung, Desa, Pulau, Kota, Laut, Objek Wisata
- Each includes: name, location, description, price, image, guide option

### 2. Transport Booking
- **Flights**: 3 domestic flight options
- **Buses**: 2 intercity bus routes
- **Car Rentals**: 2 vehicle types

### 3. Booking System
- Multi-step booking flow
- Form validation
- Price calculation
- Receipt generation
- Email notifications

### 4. Pages
- `/` - Landing page with category gallery
- `/packages` - Browse all packages with filters
- `/transport` - Search transport options
- `/booking/[id]` - Booking form for specific service
- `/checkout` - Booking confirmation

## 🗂️ Database Schema (Prisma)

### Models
- **TourPackage** - Tour packages with category and guide option
- **Transport** - Flight, bus, car rental options
- **Booking** - Customer bookings
- **User** - Admin users (optional)

## 📧 Email System

Nodemailer sends confirmations to:
- **Customer**: Booking details + receipt
- **Admin**: New booking notification

Email template includes:
- Receipt ID
- Service details
- Customer information
- Total price
- Booking date

## 🧪 Development
### Frontend Development
```bash
cd frontend
npm run dev      # Start dev server
npm run build    # Build for production
npm run type-check # Type checking
npm run lint     # ESLint
```

### Backend Development
```bash
cd backend
npm run start:dev      # Start dev server
npm run build          # Build
npm run prisma:migrate # Database migration
npm run seed          # Seed database
npm run test          # Run tests
```

## 📝 Dummy Data

### Tour Packages (10)
1. Pantai Air Manis - Beach
2. Gunung Marapi - Mountain
3. Desa Pariangan - Village
4. Pulau Mentawai - Island
5. Kota Bukittinggi - City
6. Laut Biru Pariaman - Sea
7. Harau Canyon - Natural Object
8. Danau Singkarak - Lake
9. Jam Gadang & Fort de Kock - Monument
10. Taman Nasional Kerinci Seblat - National Park

### Transport (7)
- 3 Flight routes (Jakarta, Surabaya, Bandung → Padang)
- 2 Bus routes (Medan-Padang, Pekanbaru-Bukittinggi)
- 2 Car rentals (Avanza, CR-V)

## 🎨 Design System

### Colors
- **Primary**: #0f766e (Teal)
- **Secondary**: #14b8a6 (Emerald)
- **Background**: #ffffff (White)
- **Text**: #111827 (Gray-900)

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔗 Integration Flow

```
User → Frontend (Next.js)
         ↓
     [Browse/Book]
         ↓
API Calls (Axios)
         ↓
Backend (NestJS)
         ↓
[Validate → Store → Email]
         ↓
Database (Prisma)
         ↓
Response + Email Notification
         ↓
Frontend → Success Page
```

