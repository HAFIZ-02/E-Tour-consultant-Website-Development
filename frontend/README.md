# Tour Consultant Frontend

Modern Next.js frontend for the Tour Consultant application with beautiful UI and responsive design.

## 🚀 Features

- **Landing Page**: Hero section with category-based tour gallery
- **Package Browsing**: Browse tour packages with filtering and sorting
- **Transport Booking**: Search and book flights, buses, and car rentals
- **Booking System**: Easy-to-use booking form with validation
- **Checkout**: Confirmation page with receipt download
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Toast Notifications**: User feedback with react-hot-toast

## 📦 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: React Icons
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Notifications**: React Hot Toast

## 🛠️ Installation

### Prerequisites
- Node.js 18+ and npm/yarn

### Setup Steps

1. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Configure Environment Variables**
   
   Create `.env.local` file:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001/api
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
frontend/
├── app/
│   ├── layout.tsx           # Main layout with Navbar & Footer
│   ├── page.tsx             # Landing page
│   ├── globals.css          # Global styles
│   ├── packages/            # Tour packages page
│   ├── transport/           # Transport booking page
│   ├── booking/[id]/        # Booking form page
│   └── checkout/            # Checkout/confirmation page
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Footer.tsx           # Footer component
│   ├── PackageCard.tsx      # Tour package card
│   └── TransportCard.tsx    # Transport option card
├── lib/
│   ├── api-client.ts        # Axios API configuration
│   └── dummy-data.ts        # Dummy data for demo
├── types/
│   └── index.ts             # TypeScript type definitions
└── package.json
```

## 🎨 Pages

### `/` - Landing Page
- Hero section with call-to-action buttons
- Category filter for tour packages
- Gallery of tour packages
- Featured destinations from Sumatera Barat

### `/packages` - Tour Packages
- Browse all tour packages
- Filter by category
- Search by name or location
- Sort by name or price
- Individual package cards with details

### `/transport` - Transport Booking
- Search flights, buses, and car rentals
- Filter by transport type
- Search by route or provider name
- View prices and availability

### `/booking/[id]` - Booking Form
- Service details and summary
- Booking form with fields:
  - Name, Email, Phone
  - Booking Date
  - Number of People
  - Special Requests
- Price calculation display
- Form validation

### `/checkout` - Confirmation
- Booking confirmation message
- Receipt ID and details
- Download receipt option
- Next steps information

## 🛃 Components

### Navbar
- Responsive navigation menu
- Mobile-friendly hamburger menu
- Links to main pages

### Footer
- Company information
- Quick links
- Services list
- Social media links
- Contact information

### PackageCard
- Package image with hover effect
- Package name and location
- Category badge
- Price display
- "Book Now" button
- Tour guide indicator

### TransportCard
- Transport type indicator
- Route information (From → To)
- Provider name
- Price display
- "Book" button

## 🔄 Data Flow

1. **Browse**: User browses packages or transport options
2. **Select**: User clicks "Book Now" button
3. **Book**: User fills booking form with details
4. **Confirm**: System validates and shows confirmation
5. **Download**: User can download receipt

## 🧪 Testing

```bash
# Build for production
npm run build

# Run production server
npm start

# Type checking
npm run type-check

# Lint code
npm run lint
```

## 📝 Dummy Data

### Tour Packages (10 packages)
- Pantai Air Manis (Beach)
- Gunung Marapi (Mountain)
- Desa Pariangan (Village)
- Pulau Mentawai (Island)
- Kota Bukittinggi (City)
- And more...

### Transport
- 3 Flight options
- 2 Bus options
- 2 Car rental options

## 🌐 Environment Variables

```env
# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

## 🔗 API Integration

Frontend communicates with NestJS backend at `/api` endpoints:

- `GET /packages` - Get all packages
- `GET /packages/:id` - Get package details
- `GET /packages/category/:category` - Get packages by category
- `GET /transport` - Get all transport
- `GET /transport/:id` - Get transport details
- `POST /booking` - Create booking
- `GET /booking/:id` - Get booking details

## 🎯 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark scroll bar
- ✅ Smooth animations and transitions
- ✅ Form validation
- ✅ Loading states
- ✅ Error handling
- ✅ Toast notifications
- ✅ Receipt download functionality
- ✅ SEO optimized with metadata

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email info@tour-consultant.com or create an issue in the repository.

## 🙏 Acknowledgments

- Unsplash for placeholder images
- Tailwind CSS for styling
- Next.js team for the framework
- React community for amazing libraries
