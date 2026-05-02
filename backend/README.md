# Tour Consultant Backend

NestJS REST API for Tour Consultant application with Prisma ORM and email notifications.

## 🚀 Features

- **REST API**: Complete CRUD operations for packages, transport, and bookings
- **Database**: Prisma ORM with SQLite (easily switchable to PostgreSQL)
- **Email**: Nodemailer with Gmail SMTP for booking confirmations
- **Validation**: Class-validator for request validation
- **CORS**: Configured for frontend integration
- **Dummy Data**: Pre-seeded with 10 tour packages and 15 transport options

## 📦 Tech Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: SQLite (development) / PostgreSQL (production)
- **ORM**: Prisma
- **Email**: Nodemailer
- **Validation**: class-validator
- **Config**: @nestjs/config

## 🛠️ Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup Steps

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Configure Environment**
   
   Update `.env` file:
   ```env
   DATABASE_URL="file:./dev.db"
   NODE_ENV=development
   PORT=3001

   # Email Configuration (Gmail)
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_FROM=noreply@tour-consultant.com
   ```

3. **Setup Database**
   ```bash
   # Generate Prisma client
   npm run prisma:generate

   # Run migrations
   npm run prisma:migrate

   # Seed database with dummy data
   npm run prisma:seed
   ```

4. **Start Development Server**
   ```bash
   npm run start:dev
   ```

   API will be available at [http://localhost:3001/api](http://localhost:3001/api)

## 📁 Project Structure

```
backend/
├── src/
│   ├── app.module.ts          # Main application module
│   ├── main.ts                # Application bootstrap
│   ├── prisma/                # Database service
│   ├── packages/              # Tour packages module
│   ├── transport/             # Transport module
│   ├── booking/               # Booking module
│   └── email/                 # Email service
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── seed.ts               # Database seeding
├── package.json
├── tsconfig.json
└── .env
```

## 🗂️ Database Schema

### Models

**TourPackage**
- id: String (CUID)
- name: String
- category: String (pantai, gunung, desa, pulau, kota, laut, objek-wisata)
- location: String
- description: String
- price: Int
- image: String
- includeGuide: Boolean
- createdAt/updatedAt: DateTime

**Transport**
- id: String (CUID)
- type: String (flight, bus, car-rental)
- name: String
- from/to: String
- price: Int
- date: DateTime (optional)
- availableSeats: Int (optional)
- createdAt/updatedAt: DateTime

**Booking**
- id: String (CUID)
- receiptId: String (unique)
- name/email/phone: String
- date: DateTime
- numberOfPeople: Int
- serviceType: String (package/transport)
- serviceId: String
- notes: String (optional)
- totalPrice: Int
- status: String (pending/confirmed/cancelled)
- createdAt/updatedAt: DateTime

## 📋 API Endpoints

### Packages
```
GET    /api/packages              # Get all packages
GET    /api/packages/:id          # Get package by ID
GET    /api/packages/category/:category  # Get packages by category
```

### Transport
```
GET    /api/transport             # Get all transport
GET    /api/transport/:id         # Get transport by ID
GET    /api/transport?type=flight # Get transport by type
```

### Bookings
```
POST   /api/booking               # Create new booking
GET    /api/booking/:id           # Get booking by ID
POST   /api/booking/verify-email  # Verify email format
```

## 📧 Email System

### Configuration
Uses Gmail SMTP. Get app password from Google Account settings.

### Templates
- **Customer Confirmation**: Booking details, receipt, next steps
- **Admin Notification**: New booking alert with customer details

### Features
- HTML email templates
- Automatic sending on booking creation
- Error handling (doesn't fail booking if email fails)

## 🌱 Dummy Data

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

### Transport (15)
- **Flights (5)**: Garuda, Batik Air, Lion Air, Citilink, AirAsia
- **Buses (5)**: Various routes from major cities
- **Car Rentals (5)**: Toyota, Honda, Mitsubishi, Suzuki, Toyota

## 🔄 Booking Flow

1. **Frontend** → POST `/api/booking` with booking data
2. **Backend** → Validate data & calculate total price
3. **Database** → Save booking with generated receipt ID
4. **Email** → Send confirmation to customer & admin
5. **Response** → Return booking details to frontend

## 🧪 Testing

### Manual Testing with cURL

```bash
# Get all packages
curl http://localhost:3001/api/packages

# Get packages by category
curl http://localhost:3001/api/packages/category/pantai

# Create booking
curl -X POST http://localhost:3001/api/booking \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+628123456789",
    "date": "2024-12-25",
    "numberOfPeople": 2,
    "serviceType": "package",
    "serviceId": "1",
    "notes": "Vegetarian meals please"
  }'
```

### API Testing Tools
- **Postman**: Import collection from `docs/postman_collection.json`
- **Thunder Client**: VS Code extension
- **Insomnia**: REST client

## 🚀 Production Deployment

### Environment Variables
```env
DATABASE_URL="postgresql://user:password@host:5432/db"
NODE_ENV=production
PORT=3001
EMAIL_USER=your-production-email@gmail.com
EMAIL_PASS=your-production-app-password
```

### Build & Deploy
```bash
# Build application
npm run build

# Start production server
npm run start:prod
```

### Docker
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3001
CMD ["npm", "run", "start:prod"]
```

## 🔧 Development Commands

```bash
# Development
npm run start:dev          # Start with hot reload
npm run start:debug        # Start with debugger

# Database
npm run prisma:studio      # Open Prisma Studio
npm run prisma:migrate     # Run migrations
npm run prisma:seed        # Seed database

# Code Quality
npm run lint               # Run ESLint
npm run format             # Format with Prettier
npm run test               # Run tests
```

## 🐛 Troubleshooting

### Database Connection Issues
```bash
# Reset database
npm run prisma:migrate reset
npm run prisma:seed
```

### Email Not Sending
- Check Gmail app password is correct
- Enable "Less secure app access" or use app password
- Verify firewall allows SMTP (port 587)

### CORS Issues
- Check frontend URL in CORS configuration
- Ensure API calls use correct base URL

### Port Already in Use
```bash
# Kill process on port 3001
npx kill-port 3001
```

## 📚 API Documentation

### Response Format
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

### Error Format
```json
{
  "success": false,
  "error": "Error message",
  "message": "Operation failed"
}
```

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/new-endpoint`
2. Write tests for new functionality
3. Ensure all tests pass: `npm run test`
4. Submit pull request

## 📄 License

MIT License - see LICENSE file for details

## 📞 Support

For API support, create an issue in the repository or contact the development team.
