import { Property, Booking, User } from '../types';

export const properties: Property[] = [
  {
    id: 1,
    name: 'Villa Méditerranée',
    location: 'Nice, France',
    price: 195,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Magnifique villa avec vue sur la mer, piscine privée et accès direct à la plage.',
    amenities: ['Piscine', 'Wi-Fi', 'Climatisation', 'Cuisine équipée', 'Parking', 'Accès plage'],
    bedrooms: 4,
    bathrooms: 3,
    capacity: 8
  },
  {
    id: 2,
    name: 'Chalet Alpin',
    location: 'Chamonix, France',
    price: 220,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Chalet authentique au cœur des Alpes, idéal pour les amateurs de ski et de randonnées.',
    amenities: ['Sauna', 'Cheminée', 'Wi-Fi', 'Terrasse', 'Vue montagne', 'Équipement ski'],
    bedrooms: 3,
    bathrooms: 2,
    capacity: 6
  },
  {
    id: 3,
    name: 'Mas Provençal',
    location: 'Aix-en-Provence, France',
    price: 175,
    rating: 4.7,
    images: [
      'https://images.unsplash.com/photo-1615529162924-f8605388461d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Authentique mas provençal entouré de lavande et d\'oliviers, proche des villages pittoresques.',
    amenities: ['Jardin', 'Piscine', 'Barbecue', 'Wi-Fi', 'Climatisation', 'Parking'],
    bedrooms: 3,
    bathrooms: 2,
    capacity: 7
  },
  {
    id: 4,
    name: 'Appartement Parisien',
    location: 'Paris, France',
    price: 165,
    rating: 4.6,
    images: [
      'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574691250077-03a929faece5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Élégant appartement haussmannien au cœur de Paris, à proximité des attractions touristiques.',
    amenities: ['Wi-Fi', 'Ascenseur', 'Cuisine équipée', 'Climatisation', 'Vue sur la ville'],
    bedrooms: 2,
    bathrooms: 1,
    capacity: 4
  }
];

export const bookings: Booking[] = [
  {
    id: 1,
    propertyId: 1,
    userId: 1,
    checkIn: new Date(2025, 4, 10),
    checkOut: new Date(2025, 4, 17),
    guests: 4,
    totalPrice: 1365,
    status: 'confirmé',
    paymentStatus: 'payé'
  },
  {
    id: 2,
    propertyId: 3,
    userId: 2,
    checkIn: new Date(2025, 5, 5),
    checkOut: new Date(2025, 5, 12),
    guests: 6,
    totalPrice: 1225,
    status: 'confirmé',
    paymentStatus: 'payé'
  },
  {
    id: 3,
    propertyId: 2,
    userId: 3,
    checkIn: new Date(2025, 4, 20),
    checkOut: new Date(2025, 4, 27),
    guests: 5,
    totalPrice: 1540,
    status: 'en attente',
    paymentStatus: 'en attente'
  },
  {
    id: 4,
    propertyId: 4,
    userId: 4,
    checkIn: new Date(2025, 6, 15),
    checkOut: new Date(2025, 6, 22),
    guests: 3,
    totalPrice: 1155,
    status: 'confirmé',
    paymentStatus: 'payé'
  },
  {
    id: 5,
    propertyId: 1,
    userId: 5,
    checkIn: new Date(2025, 7, 1),
    checkOut: new Date(2025, 7, 8),
    guests: 7,
    totalPrice: 1365,
    status: 'confirmé',
    paymentStatus: 'payé'
  }
];

export const users: User[] = [
  {
    id: 1,
    name: 'Sophie Martin',
    email: 'sophie.martin@email.fr',
    role: 'client',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    email: 'thomas.dubois@email.fr',
    role: 'client',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    id: 3,
    name: 'Marie Leclerc',
    email: 'marie.leclerc@email.fr',
    role: 'client',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg'
  },
  {
    id: 4,
    name: 'Lucas Bernard',
    email: 'lucas.bernard@email.fr',
    role: 'client',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
  {
    id: 5,
    name: 'Emma Petit',
    email: 'emma.petit@email.fr',
    role: 'client',
    avatar: 'https://randomuser.me/api/portraits/women/17.jpg'
  }
];

export const bookingStats = {
  totalBookings: 87,
  confirmedBookings: 73,
  pendingBookings: 14,
  averageStay: 6.2,
  occupancyRate: 76,
  popularProperties: [
    { id: 1, name: 'Villa Méditerranée', bookings: 24 },
    { id: 2, name: 'Chalet Alpin', bookings: 21 },
    { id: 3, name: 'Mas Provençal', bookings: 18 }
  ],
  revenueByMonth: [
    { month: 'Jan', revenue: 12500 },
    { month: 'Fév', revenue: 13200 },
    { month: 'Mar', revenue: 15800 },
    { month: 'Avr', revenue: 18900 },
    { month: 'Mai', revenue: 22300 },
    { month: 'Juin', revenue: 28700 },
    { month: 'Juil', revenue: 35400 },
    { month: 'Août', revenue: 38200 },
    { month: 'Sep', revenue: 29100 },
    { month: 'Oct', revenue: 21500 },
    { month: 'Nov', revenue: 17800 },
    { month: 'Déc', revenue: 19600 }
  ]
};

export const availableDates = {
  1: [
    { start: new Date(2025, 3, 1), end: new Date(2025, 4, 9) },
    { start: new Date(2025, 4, 18), end: new Date(2025, 6, 30) },
    { start: new Date(2025, 7, 9), end: new Date(2025, 11, 31) }
  ],
  2: [
    { start: new Date(2025, 3, 1), end: new Date(2025, 4, 19) },
    { start: new Date(2025, 4, 28), end: new Date(2025, 11, 31) }
  ],
  3: [
    { start: new Date(2025, 3, 1), end: new Date(2025, 5, 4) },
    { start: new Date(2025, 5, 13), end: new Date(2025, 11, 31) }
  ],
  4: [
    { start: new Date(2025, 3, 1), end: new Date(2025, 6, 14) },
    { start: new Date(2025, 6, 23), end: new Date(2025, 11, 31) }
  ]
};

export const notifications = [
  {
    id: 1,
    message: 'Nouvelle réservation pour Villa Méditerranée',
    time: '11:45',
    read: false
  },
  {
    id: 2,
    message: 'Paiement reçu pour Mas Provençal',
    time: '09:20',
    read: true
  },
  {
    id: 3,
    message: 'Demande de modification de dates pour Chalet Alpin',
    time: 'Hier',
    read: false
  },
  {
    id: 4,
    message: 'Nouvelle évaluation 5 étoiles pour Appartement Parisien',
    time: 'Hier',
    read: true
  },
  {
    id: 5,
    message: 'Rappel: Vérification de disponibilité à mettre à jour',
    time: '2 jours',
    read: true
  }
];
