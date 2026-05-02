# Tour Consultant - Fullstack Application

Complete tour booking and management system for exploring Sumatera Barat with responsive web interface and robust backend.

## 📋 Project Overview

Tour Consultant is a comprehensive tour booking platform featuring:
- ✅ Browse & book tour packages by category
- ✅ Flight, bus, and car rental booking
- ✅ User-friendly booking form
- ✅ Email confirmations and receipts
- ✅ Admin management system

## 📂 Project Structure

```
tour-app/
├── frontend/           # Next.js application (React)
│   ├── app/           # Next.js App Router
│   ├── components/    # Reusable React components
│   ├── lib/          # Utilities and API client
│   ├── types/        # TypeScript definitions
│   ├── package.json
│   └── README.md
├── backend/           # NestJS application (Node.js)
│   ├── src/
│   ├── package.json
│   └── README.md
└── README.md
```

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

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Configure environment
echo "NEXT_PUBLIC_API_URL=http://localhost:3001/api" > .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Configure environment
cp .env.example .env

# Setup database
npm run prisma:migrate

# Run development server
npm run start:dev
```

Backend runs at [http://localhost:3001](http://localhost:3001)

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

## 🔐 Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

### Backend (.env)
```env
DATABASE_URL=postgresql://user:password@localhost:5432/tour_db
# or for SQLite:
DATABASE_URL=file:./dev.db

EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@tour-consultant.com

NODE_ENV=development
PORT=3001
```

## 📋 API Endpoints

### Packages
- `GET /api/packages` - All packages
- `GET /api/packages/:id` - Package details
- `GET /api/packages/category/:category` - By category

### Transport
- `GET /api/transport` - All transport
- `GET /api/transport/:id` - Transport details
- `GET /api/transport?type=flight` - By type

### Bookings
- `POST /api/booking` - Create booking
- `GET /api/booking/:id` - Get booking details
- `POST /api/booking/verify-email` - Verify email

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

## 📱 Deployment

### Frontend
- **Vercel**: Recommended for Next.js
- **Netlify**: Alternative
- **Docker**: Custom deployment

### Backend
- **Railway**: PostgreSQL + NestJS
- **Heroku**: PaaS option
- **Docker**: Container deployment
- **AWS/Azure**: Cloud platforms

## 🐛 Troubleshooting

### Frontend Won't Start
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Backend Database Error
```bash
cd backend
npx prisma studio      # View database
npx prisma migrate reset # Reset migrations
```

### API Connection Failed
- Check backend is running on port 3001
- Verify `.env.local` has correct `NEXT_PUBLIC_API_URL`
- Check CORS configuration in backend

## 📚 Documentation

- [Frontend README](./frontend/README.md) - Next.js app documentation
- [Backend README](./backend/README.md) - NestJS API documentation

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push: `git push origin feature/amazing-feature`
4. Open Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 📞 Support

Email: info@tour-consultant.com

---

**Built with ❤️ for Sumatera Barat Tourism**
