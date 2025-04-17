import mongoose from 'mongoose';
import Rooms from '../models/rooms.js';

const roomData = [
  {
    url: 'deluxe-room.jpg',
    title: 'Deluxe Room',
    titleHeader: 'Experience Luxury',
    description: 'Our spacious deluxe room offers modern amenities and elegant design',
    header: 'Deluxe Room',
    subHeader: 'Perfect for couples or business travelers',
    view: 'City View',
    size: '400 sq ft',
    adults: 2,
    children: 1,
    bedding: 'King Size Bed',
    amenities: ['Free Wi-Fi', 'Mini Bar', 'Room Service', 'Flat-screen TV', 'Air Conditioning'],
    paragraph: 'Indulge in comfort with our deluxe room featuring premium bedding, modern amenities, and stunning city views.',
    subImage: 'deluxe-detail.jpg',
    rooms: 10,
    price: 200
  },
  {
    url: 'suite-room.jpg',
    title: 'Executive Suite',
    titleHeader: 'Ultimate Luxury',
    description: 'Spacious suite with separate living area and premium amenities',
    header: 'Executive Suite',
    subHeader: 'Ideal for families or extended stays',
    view: 'Ocean View',
    size: '800 sq ft',
    adults: 3,
    children: 2,
    bedding: '1 King Bed + 1 Sofa Bed',
    amenities: ['Free Wi-Fi', 'Mini Bar', '24/7 Room Service', 'Smart TV', 'Jacuzzi', 'Kitchenette'],
    paragraph: 'Experience luxury living in our executive suite with panoramic ocean views and exclusive amenities.',
    subImage: 'suite-detail.jpg',
    rooms: 5,
    price: 400
  },
  {
    url: 'standard-room.jpg',
    title: 'Standard Room',
    titleHeader: 'Comfortable Stay',
    description: 'Cozy room with essential amenities for a pleasant stay',
    header: 'Standard Room',
    subHeader: 'Great value for money',
    view: 'Garden View',
    size: '300 sq ft',
    adults: 2,
    children: 1,
    bedding: 'Queen Size Bed',
    amenities: ['Free Wi-Fi', 'TV', 'Air Conditioning', 'Daily Housekeeping'],
    paragraph: 'Our standard rooms provide all the essential comforts for a relaxing stay.',
    subImage: 'standard-detail.jpg',
    rooms: 15,
    price: 150
  },
  {
    url: 'penthouse-suite.jpg',
    title: 'Penthouse Suite',
    titleHeader: 'Pinnacle of Luxury',
    description: 'Exclusive top-floor suite with panoramic views and private terrace',
    header: 'Penthouse Suite',
    subHeader: 'The ultimate luxury experience',
    view: 'Panoramic City View',
    size: '1500 sq ft',
    adults: 4,
    children: 2,
    bedding: '2 King Beds + 1 Sofa Bed',
    amenities: ['Private Butler', 'Infinity Pool', 'Private Bar', 'Home Theater', 'Steam Room', 'Private Dining'],
    paragraph: 'Our crown jewel penthouse suite offers unparalleled luxury with breathtaking views and exclusive amenities.',
    subImage: 'penthouse-detail.jpg',
    rooms: 2,
    price: 1000
  },
  {
    url: 'family-suite.jpg',
    title: 'Family Suite',
    titleHeader: 'Perfect Family Getaway',
    description: 'Spacious suite designed for family comfort and convenience',
    header: 'Family Suite',
    subHeader: 'Create lasting memories together',
    view: 'Pool View',
    size: '1000 sq ft',
    adults: 4,
    children: 3,
    bedding: '1 King Bed + 2 Twin Beds',
    amenities: ['Kids Play Area', 'Kitchenette', 'Game Console', 'Family Dining Area', 'Child-Safe Features'],
    paragraph: 'Designed with families in mind, our family suite offers ample space and kid-friendly amenities.',
    subImage: 'family-detail.jpg',
    rooms: 8,
    price: 350
  },
  {
    url: 'ocean-view.jpg',
    title: 'Ocean View Room',
    titleHeader: 'Seaside Serenity',
    description: 'Wake up to stunning ocean views and sea breeze',
    header: 'Ocean View Room',
    subHeader: 'Your private seaside retreat',
    view: 'Direct Ocean View',
    size: '450 sq ft',
    adults: 2,
    children: 1,
    bedding: 'King Size Bed',
    amenities: ['Private Balcony', 'Telescope', 'Beach Access', 'Mini Bar', 'Room Service'],
    paragraph: 'Enjoy the sound of waves and breathtaking ocean views from your private balcony.',
    subImage: 'ocean-detail.jpg',
    rooms: 12,
    price: 300
  },
  {
    url: 'spa-suite.jpg',
    title: 'Spa Suite',
    titleHeader: 'Wellness Retreat',
    description: 'In-room spa facilities for ultimate relaxation',
    header: 'Spa Suite',
    subHeader: 'Your personal wellness sanctuary',
    view: 'Garden View',
    size: '600 sq ft',
    adults: 2,
    children: 0,
    bedding: 'King Size Bed',
    amenities: ['Private Hot Tub', 'Massage Table', 'Aromatherapy', 'Yoga Mat', 'Meditation Area'],
    paragraph: 'Transform your stay into a spa retreat with in-room wellness facilities and services.',
    subImage: 'spa-detail.jpg',
    rooms: 6,
    price: 450
  },
  {
    url: 'business-suite.jpg',
    title: 'Business Suite',
    titleHeader: 'Work in Style',
    description: 'Equipped office space with modern business facilities',
    header: 'Business Suite',
    subHeader: 'Your office away from office',
    view: 'City View',
    size: '550 sq ft',
    adults: 2,
    children: 1,
    bedding: 'King Size Bed',
    amenities: ['Office Desk', 'Meeting Area', 'Printer', 'High-Speed Internet', 'Coffee Machine'],
    paragraph: 'Perfect for business travelers with a fully equipped workspace and meeting area.',
    subImage: 'business-detail.jpg',
    rooms: 8,
    price: 350
  },
  {
    url: 'honeymoon-suite.jpg',
    title: 'Honeymoon Suite',
    titleHeader: 'Romantic Escape',
    description: 'Intimate suite designed for romantic getaways',
    header: 'Honeymoon Suite',
    subHeader: 'Create romantic memories',
    view: 'Ocean View',
    size: '700 sq ft',
    adults: 2,
    children: 0,
    bedding: 'Luxury King Size Bed',
    amenities: ['Private Jacuzzi', 'Champagne Bar', 'Romantic Lighting', 'Couple Spa Area', 'Private Dining'],
    paragraph: 'Celebrate your love in our romantic honeymoon suite with intimate settings and luxury amenities.',
    subImage: 'honeymoon-detail.jpg',
    rooms: 4,
    price: 500
  },
  {
    url: 'pool-villa.jpg',
    title: 'Pool Villa',
    titleHeader: 'Private Paradise',
    description: 'Luxurious villa with private pool and garden',
    header: 'Pool Villa',
    subHeader: 'Your private oasis',
    view: 'Garden View',
    size: '1200 sq ft',
    adults: 4,
    children: 2,
    bedding: '2 King Beds',
    amenities: ['Private Pool', 'Garden', 'BBQ Area', 'Outdoor Dining', 'Butler Service'],
    paragraph: 'Experience ultimate privacy in our pool villa with personal swimming pool and garden.',
    subImage: 'villa-detail.jpg',
    rooms: 3,
    price: 800
  },
  {
    url: 'studio-apartment.jpg',
    title: 'Studio Apartment',
    titleHeader: 'Home Away from Home',
    description: 'Fully equipped studio for extended stays',
    header: 'Studio Apartment',
    subHeader: 'Perfect for long-term stays',
    view: 'City View',
    size: '500 sq ft',
    adults: 2,
    children: 1,
    bedding: 'Queen Size Bed',
    amenities: ['Full Kitchen', 'Washer/Dryer', 'Work Area', 'Living Space', 'Storage'],
    paragraph: 'Feel at home in our fully equipped studio apartments, perfect for extended stays.',
    subImage: 'studio-detail.jpg',
    rooms: 10,
    price: 250
  },
  {
    url: 'accessible-room.jpg',
    title: 'Accessible Room',
    titleHeader: 'Comfort for All',
    description: 'Specially designed room with accessibility features',
    header: 'Accessible Room',
    subHeader: 'Comfortable and convenient',
    view: 'Garden View',
    size: '450 sq ft',
    adults: 2,
    children: 1,
    bedding: 'Two Queen Beds',
    amenities: ['Wheelchair Access', 'Roll-in Shower', 'Grab Bars', 'Wide Doorways', 'Emergency Cord'],
    paragraph: 'Our accessible rooms are thoughtfully designed to ensure comfort and convenience for all guests.',
    subImage: 'accessible-detail.jpg',
    rooms: 5,
    price: 200
  },
  {
    url: 'eco-room.jpg',
    title: 'Eco-Friendly Room',
    titleHeader: 'Sustainable Luxury',
    description: 'Environmentally conscious room with sustainable features',
    header: 'Eco-Friendly Room',
    subHeader: 'Green living without compromise',
    view: 'Garden View',
    size: '400 sq ft',
    adults: 2,
    children: 1,
    bedding: 'Organic King Size Bed',
    amenities: ['Solar Power', 'Recycled Materials', 'Water Conservation', 'Organic Toiletries', 'Smart Climate Control'],
    paragraph: 'Experience luxury with a minimal environmental footprint in our eco-friendly rooms.',
    subImage: 'eco-detail.jpg',
    rooms: 8,
    price: 250
  }
];

import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const seedDB = async () => {
  try {
    await Rooms.deleteMany({});
    await Rooms.insertMany(roomData);
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();