import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Seed Tour Packages
  const packages = [
    {
      id: '1',
      name: 'Pantai Air Manis',
      category: 'pantai',
      location: 'Padang, Sumatera Barat',
      description: 'Pantai indah dengan pasir putih dan pemandangan Pulau Sikuai yang menakjubkan. Cocok untuk bersantai dan berenang.',
      price: 250000,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=300&fit=crop',
      includeGuide: false,
    },
    {
      id: '2',
      name: 'Gunung Marapi',
      category: 'gunung',
      location: 'Bukittinggi, Sumatera Barat',
      description: 'Pendakian gunung berapi dengan pemandangan spektakuler dari puncak. Aktivitas pendakian memerlukan persiapan fisik yang baik.',
      price: 500000,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      includeGuide: true,
    },
    {
      id: '3',
      name: 'Desa Pariangan',
      category: 'desa',
      location: 'Tanah Datar, Sumatera Barat',
      description: 'Desa tradisional dengan rumah gadang autentik. Pelajari budaya dan tradisi minangkabau langsung dari penduduk lokal.',
      price: 300000,
      image: 'https://images.unsplash.com/photo-1506815394602-a7e80b5e5cff?w=500&h=300&fit=crop',
      includeGuide: true,
    },
    {
      id: '4',
      name: 'Pulau Mentawai',
      category: 'pulau',
      location: 'Mentawai, Sumatera Barat',
      description: 'Pulau eksotis dengan pantai tersembunyi dan spot surfing kelas dunia. Destinasi impian untuk petualangan dan relaksasi.',
      price: 1000000,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop',
      includeGuide: true,
    },
    {
      id: '5',
      name: 'Kota Bukittinggi',
      category: 'kota',
      location: 'Bukittinggi, Sumatera Barat',
      description: 'Kota tua dengan sejarah panjang. Jelajahi Benteng Fort de Kock, museum, dan pasar tradisional yang ramai.',
      price: 350000,
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=300&fit=crop',
      includeGuide: false,
    },
    {
      id: '6',
      name: 'Laut Biru Pariaman',
      category: 'laut',
      location: 'Pariaman, Sumatera Barat',
      description: 'Aktivitas laut seperti snorkeling, diving, dan island hopping. Ekosistem bawah laut yang kaya dan menawan.',
      price: 450000,
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=300&fit=crop',
      includeGuide: true,
    },
    {
      id: '7',
      name: 'Harau Canyon',
      category: 'objek-wisata',
      location: 'Lima Puluh Kota, Sumatera Barat',
      description: 'Ngarai spektakuler dengan tebing tinggi, air terjun, dan kolam alami. Tempat sempurna untuk rock climbing dan fotografi.',
      price: 400000,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      includeGuide: true,
    },
    {
      id: '8',
      name: 'Danau Singkarak',
      category: 'laut',
      location: 'Solok, Sumatera Barat',
      description: 'Danau terbesar kedua di Sumatera dengan pemandangan alam yang tenang. Aktivitas memancing dan naik perahu tersedia.',
      price: 275000,
      image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&h=300&fit=crop',
      includeGuide: false,
    },
    {
      id: '9',
      name: 'Jam Gadang & Fort de Kock',
      category: 'objek-wisata',
      location: 'Bukittinggi, Sumatera Barat',
      description: 'Ikon Bukittinggi berupa jam gadang dengan benteng bersejarah. Menikmati sejarah dan pemandangan kota dari ketinggian.',
      price: 150000,
      image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=500&h=300&fit=crop',
      includeGuide: false,
    },
    {
      id: '10',
      name: 'Taman Nasional Kerinci Seblat',
      category: 'gunung',
      location: 'Kerinci, Sumatera Barat',
      description: 'Taman nasional dengan flora dan fauna langka. Petualangan jungle trekking dan bird watching bagi pecinta alam.',
      price: 750000,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop',
      includeGuide: true,
    },
  ];

  // Seed Transport
  const transports = [
    // Flights
    {
      id: 'fl1',
      type: 'flight',
      name: 'Garuda Indonesia',
      from: 'Jakarta (CGK)',
      to: 'Padang (PDG)',
      price: 750000,
    },
    {
      id: 'fl2',
      type: 'flight',
      name: 'Batik Air',
      from: 'Surabaya (SUB)',
      to: 'Padang (PDG)',
      price: 650000,
    },
    {
      id: 'fl3',
      type: 'flight',
      name: 'Lion Air',
      from: 'Bandung (BDO)',
      to: 'Padang (PDG)',
      price: 550000,
    },
    {
      id: 'fl4',
      type: 'flight',
      name: 'Citilink',
      from: 'Medan (KNO)',
      to: 'Padang (PDG)',
      price: 600000,
    },
    {
      id: 'fl5',
      type: 'flight',
      name: 'AirAsia',
      from: 'Pekanbaru (PKU)',
      to: 'Padang (PDG)',
      price: 450000,
    },

    // Buses
    {
      id: 'bs1',
      type: 'bus',
      name: 'Medan - Padang Express',
      from: 'Medan',
      to: 'Padang',
      price: 150000,
    },
    {
      id: 'bs2',
      type: 'bus',
      name: 'Pekanbaru - Bukittinggi',
      from: 'Pekanbaru',
      to: 'Bukittinggi',
      price: 120000,
    },
    {
      id: 'bs3',
      type: 'bus',
      name: 'Palembang - Padang',
      from: 'Palembang',
      to: 'Padang',
      price: 200000,
    },
    {
      id: 'bs4',
      type: 'bus',
      name: 'Jambi - Bukittinggi',
      from: 'Jambi',
      to: 'Bukittinggi',
      price: 180000,
    },
    {
      id: 'bs5',
      type: 'bus',
      name: 'Lampung - Padang',
      from: 'Lampung',
      to: 'Padang',
      price: 250000,
    },

    // Car Rentals
    {
      id: 'cr1',
      type: 'car-rental',
      name: 'Toyota Avanza',
      from: 'Padang',
      to: 'Padang',
      price: 300000,
    },
    {
      id: 'cr2',
      type: 'car-rental',
      name: 'Honda CR-V',
      from: 'Bukittinggi',
      to: 'Bukittinggi',
      price: 450000,
    },
    {
      id: 'cr3',
      type: 'car-rental',
      name: 'Mitsubishi Pajero',
      from: 'Padang',
      to: 'Padang',
      price: 500000,
    },
    {
      id: 'cr4',
      type: 'car-rental',
      name: 'Suzuki Ertiga',
      from: 'Pariaman',
      to: 'Pariaman',
      price: 350000,
    },
    {
      id: 'cr5',
      type: 'car-rental',
      name: 'Toyota Innova',
      from: 'Solok',
      to: 'Solok',
      price: 400000,
    },
  ];

  // Insert packages
  for (const pkg of packages) {
    await prisma.tourPackage.upsert({
      where: { id: pkg.id },
      update: pkg,
      create: pkg,
    });
  }

  // Insert transports
  for (const transport of transports) {
    await prisma.transport.upsert({
      where: { id: transport.id },
      update: transport,
      create: transport,
    });
  }

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
