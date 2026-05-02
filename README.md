# Tour Consultant - Fullstack Application
Complete tour booking and management system for exploring Sumatera Barat with responsive web interface and robust backend.

Tour Consultant: Platform Pemesanan Wisata Sumatera Barat
Tour Consultant adalah aplikasi web full-stack yang dirancang untuk mempermudah akses wisatawan dalam menjelajahi keindahan pariwisata Sumatera Barat. Platform ini menyederhanakan seluruh alur perjalanan, mulai dari tahap pencarian hingga reservasi, memberikan pengalaman yang mulus bagi pengguna, serta menyediakan sistem manajemen yang tangguh bagi administrator.

🚀 Tentang Proyek
Menjelajahi Sumatera Barat seharusnya terasa semudah menikmati pemandangannya. Proyek ini dibangun untuk memusatkan proses pemesanan—mulai dari paket wisata lokal hingga transportasi antarkota—ke dalam satu antarmuka yang responsif dan intuitif. Baik untuk perjalanan santai ke pesisir pantai maupun petualangan mendaki gunung, Tour Consultant memastikan setiap pemesanan dilakukan dengan cepat, transparan, dan akurat.

✨ Fitur Utama
🌍 Paket Wisata Terkurasi
Jelajahi keindahan Sumatera Barat melalui 10 paket wisata yang telah dikurasi secara profesional. Untuk memudahkan navigasi, paket dikelompokkan ke dalam tujuh kategori agar pengguna dapat menemukan destinasi yang sesuai dengan preferensi mereka:

Kategori: Pantai, Gunung, Desa, Pulau, Kota, Laut, dan Objek Wisata.

Detail Paket: Setiap paket dilengkapi dengan rincian lokasi, deskripsi highlight, harga, galeri gambar, serta opsi layanan pemandu wisata.

✈️ Pemesanan Transportasi Terintegrasi
Kami memahami bahwa perjalanan memerlukan lebih dari sekadar paket wisata. Platform ini menyediakan mesin pemesanan transportasi yang mencakup:
Penerbangan: Akses ke 3 pilihan penerbangan domestik terpercaya.
Bus: Dukungan pemesanan untuk 2 rute bus antarkota utama.
Sewa Mobil: Kemudahan memilih antara 2 jenis kendaraan yang dapat disesuaikan dengan jumlah penumpang dan kenyamanan.

💳 Sistem Pemesanan & Manajemen
Inti dari aplikasi ini adalah sistem pemesanan yang berpusat pada pengguna (user-centric) untuk kenyamanan maksimal:
Alur Multi-Langkah: Proses reservasi yang logis dan terstruktur dari pemilihan hingga pembayaran.
Validasi Formulir: Pengecekan real-time untuk memastikan akurasi data pengguna.
Harga Dinamis: Perhitungan otomatis untuk memastikan transparansi biaya.
Konfirmasi & Resi: Pembuatan bukti pemesanan otomatis dan notifikasi email agar pengguna tetap terinformasi selama proses berlangsung.

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
Frontend → Success Page
```

