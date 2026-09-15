# 🏨 HomeStay: Your Perfect Stay, Simplified

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-5.x-black?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.x-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Clerk](https://img.shields.io/badge/Clerk-Authentication-6E00FF?logo=clerk&logoColor=white)](https://clerk.dev)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-635BFF?logo=stripe&logoColor=white)](https://stripe.com)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-Image_Storage-3448C5?logo=cloudinary&logoColor=white)](https://cloudinary.com)


## 🌟 Project Overview

**HomeStay** is a full-stack hotel booking platform with advanced search & filtering, real-time booking, secure Stripe payments, and role-based authentication.
Includes a hotel owner dashboard for property management, mobile-first responsive design, and a modern user-friendly interface.

### 🎯 Vision
To eliminate the complexities of travel planning by offering a centralized, intuitive platform that makes every journey feel truly exceptional through seamless booking experiences and personalized recommendations.

### 🚀 Mission
Provide travelers with effortless access to premium accommodations while empowering hotel owners with powerful management tools, all wrapped in a beautiful, responsive, and user-friendly interface.

---

## 🌐 Live Demo

- [HomeStay Live App](https://home-stay-one.vercel.app/)

---

## ✨ Key Features

### 🏠 **For Travelers**
- **Advanced Search & Filtering**: Find hotels by location, price, amenities, and room type
- **Real-time Availability**: Live booking status and instant confirmations
- **Secure Payment Processing**: Stripe integration with multiple payment methods
- **Booking Management**: View, modify, and cancel reservations
- **User Reviews & Ratings**: Read authentic guest experiences
- **Personalized Recommendations**: AI-driven suggestions based on preferences
- **Mobile-First Design**: Optimized for all devices

### 🏨 **For Hotel Owners**
- **Property Management**: Add, edit, and manage hotel listings
- **Room Management**: Create and manage different room types
- **Booking Dashboard**: Real-time booking analytics and management
- **Revenue Tracking**: Monitor earnings and booking statistics
- **Image Management**: Upload and manage property photos via Cloudinary
- **Customer Communication**: Direct messaging with guests

### 🔧 **Technical Features**
- **Role-Based Authentication**: Secure user management with Clerk
- **Real-time Updates**: Live data synchronization
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Image Optimization**: Cloudinary integration for fast loading
- **Email Notifications**: Automated booking confirmations
- **Data Security**: Encrypted data transmission and storage

---

## 🛠️ Technology Stack

### **Frontend**
- **React 19**: Latest React with concurrent features
- **Tailwind CSS v4**: Utility-first CSS framework
- **React Router DOM**: Client-side routing
- **Axios**: HTTP client for API calls
- **React Hot Toast**: Beautiful notifications
- **Clerk React**: Authentication components

### **Backend**
- **Node.js**: JavaScript runtime environment
- **Express.js 5**: Web application framework
- **MongoDB**: NoSQL database with Mongoose ODM
- **Clerk Express**: Server-side authentication
- **Stripe**: Payment processing
- **Cloudinary**: Image storage and optimization
- **Nodemailer**: Email service integration

### **Development Tools**
- **Vite**: Fast build tool and dev server
- **ESLint**: Code linting and formatting
- **Git**: Version control
- **Vercel**: Frontend deployment
- **Render**: Backend deployment

---

## 📁 Project Structure

```
HomeStay/
├── frontend/                    # React frontend application
│   ├── public/                  # Static assets
│   │   └── favicon.svg         # Website favicon
│   ├── src/                    # Source code
│   │   ├── assets/             # Images, icons, and static data
│   │   │   ├── assets.js       # Centralized asset management
│   │   │   ├── logo.svg        # HomeStay logo
│   │   │   └── *.svg           # UI icons and graphics
│   │   ├── components/         # Reusable React components
│   │   │   ├── Hero.jsx        # Landing page hero section
│   │   │   ├── Navbar.jsx      # Navigation component
│   │   │   ├── HotelCard.jsx   # Hotel listing card
│   │   │   ├── Footer.jsx      # Website footer
│   │   │   ├── Testimonial.jsx # Customer testimonials
│   │   │   ├── HotelRegistration.jsx # Hotel owner registration
│   │   │   └── hotelOwner/     # Owner-specific components
│   │   │       ├── Navbar.jsx  # Owner dashboard navigation
│   │   │       └── Sidebar.jsx # Dashboard sidebar
│   │   ├── pages/              # Page components
│   │   │   ├── Home.jsx        # Landing page
│   │   │   ├── AllRooms.jsx    # Hotel listings page
│   │   │   ├── RoomDetails.jsx # Individual room details
│   │   │   ├── About.jsx       # About page
│   │   │   ├── Experience.jsx  # User experience showcase
│   │   │   ├── MyBookings.jsx  # User booking management
│   │   │   └── hotelOwner/     # Owner dashboard pages
│   │   │       ├── Dashboard.jsx # Owner dashboard
│   │   │       ├── AddRoom.jsx   # Add new room
│   │   │       ├── ListRoom.jsx  # Manage existing rooms
│   │   │       └── Layout.jsx    # Dashboard layout
│   │   ├── context/            # React context providers
│   │   │   └── AppContext.jsx  # Global state management
│   │   ├── App.jsx             # Main application component
│   │   ├── main.jsx            # Application entry point
│   │   └── index.css           # Global styles and animations
│   ├── package.json            # Frontend dependencies
│   ├── vite.config.js          # Vite configuration
│   └── vercel.json             # Vercel deployment config
├── backend/                     # Node.js backend application
│   ├── configs/                # Configuration files
│   │   ├── db.js              # MongoDB connection
│   │   ├── cloudinary.js      # Cloudinary configuration
│   │   └── nodemailer.js      # Email service setup
│   ├── controllers/            # Request handlers
│   │   ├── userController.js   # User management
│   │   ├── hotelController.js  # Hotel operations
│   │   ├── roomController.js   # Room management
│   │   ├── bookingController.js # Booking operations
│   │   ├── clerkWebhooks.js    # Clerk authentication webhooks
│   │   └── stripeWebhooks.js   # Stripe payment webhooks
│   ├── middleware/             # Custom middleware
│   │   ├── authMiddleware.js   # Authentication middleware
│   │   └── uploadMiddleware.js # File upload handling
│   ├── models/                 # Database schemas
│   │   ├── User.js            # User model
│   │   ├── Hotel.js           # Hotel model
│   │   ├── Room.js            # Room model
│   │   └── Booking.js         # Booking model
│   ├── routes/                 # API routes
│   │   ├── userRoutes.js      # User endpoints
│   │   ├── hotelRoutes.js     # Hotel endpoints
│   │   ├── roomRoutes.js      # Room endpoints
│   │   └── bookingRoutes.js   # Booking endpoints
│   ├── seedProductionData.js   # Production data seeding
│   ├── server.js              # Main server file
│   ├── package.json           # Backend dependencies
│   └── vercel.json            # Backend deployment config
├── ReadMe.md                   # This documentation
└── LICENSE                     # MIT License
```

---

## 🔧 Detailed Functionality

### 🏠 **Home Page Features**

#### **Hero Section**
- **Dynamic Background**: Rotating luxury hotel images with smooth transitions
- **Advanced Search Form**: 
  - Destination autocomplete with 20+ cities (Indian and International)
  - Check-in/Check-out date pickers
  - Guest count selector (1-8 guests)
  - Real-time search with instant results
- **Floating Animations**: Subtle background elements for visual appeal
- **Responsive Design**: Optimized for all screen sizes

#### **Featured Destinations**
- **Curated Hotel Showcase**: Handpicked premium properties
- **Interactive Cards**: Hover effects and smooth animations
- **Quick Booking**: Direct links to room details
- **Location Diversity**: Global destinations with local insights

#### **Recommended Hotels**
- **Personalized Suggestions**: AI-driven recommendations
- **User Preference Learning**: Adapts to booking history
- **Real-time Availability**: Live booking status
- **Price Comparison**: Transparent pricing with no hidden fees

#### **Customer Testimonials**
- **Authentic Reviews**: Real user experiences from global travelers
- **Diverse Representation**: Indian and international customers
- **Star Ratings**: 5-star rating system
- **Social Proof**: Builds trust and credibility

#### **Exclusive Offers**
- **Limited-time Deals**: Special promotions and discounts
- **Seasonal Packages**: Holiday and festival specials
- **Early Bird Discounts**: Advance booking incentives
- **Loyalty Rewards**: Returning customer benefits

### 🏨 **Hotel Listings Page (AllRooms)**

#### **Advanced Filtering System**
- **Location Filter**: Search by city, state, or country
- **Price Range**: Slider-based price filtering
- **Room Type Filter**: Single Bed, Double Bed, Luxury Room, Family Suite
- **Amenities Filter**: WiFi, Breakfast, Pool, Room Service, Mountain View
- **Availability Filter**: Real-time booking availability
- **Rating Filter**: Minimum star rating selection

#### **Sorting Options**
- **Price**: Low to High, High to Low
- **Rating**: Highest rated first
- **Distance**: Nearest to city center
- **Popularity**: Most booked properties
- **Newest**: Recently added hotels

#### **Hotel Cards**
- **High-Quality Images**: Professional property photography
- **Essential Information**: Name, location, price, rating
- **Amenity Icons**: Visual representation of facilities
- **Quick Actions**: Book Now, View Details, Add to Favorites
- **Responsive Layout**: Consistent card heights and spacing

#### **Search Functionality**
- **Real-time Search**: Instant results as you type
- **Autocomplete**: Smart suggestions based on popular destinations
- **Search History**: Recently searched locations
- **Saved Searches**: Bookmark favorite search criteria

### 🛏️ **Room Details Page**

#### **Image Gallery**
- **High-Resolution Photos**: Multiple angles and views
- **Zoom Functionality**: Detailed property inspection
- **Virtual Tours**: 360-degree room views (where available)
- **Image Carousel**: Smooth navigation between photos

#### **Detailed Information**
- **Room Specifications**: Size, bed type, occupancy
- **Amenities List**: Comprehensive facility details
- **Policies**: Cancellation, check-in/out times
- **Location Details**: Nearby attractions and transportation

#### **Booking Interface**
- **Date Selection**: Interactive calendar with availability
- **Guest Selection**: Adult and children count
- **Price Calculator**: Real-time total with taxes
- **Special Requests**: Additional requirements input
- **Instant Confirmation**: Immediate booking confirmation

#### **Reviews Section**
- **Guest Reviews**: Authentic customer feedback
- **Rating Breakdown**: Detailed scoring by category
- **Photo Reviews**: Customer-uploaded images
- **Response Management**: Hotel owner replies

### 👤 **User Authentication & Profile**

#### **Clerk Integration**
- **Social Login**: Google, Facebook, Apple sign-in
- **Email/Password**: Traditional authentication
- **Phone Verification**: SMS-based verification
- **Multi-factor Authentication**: Enhanced security

#### **User Dashboard**
- **Profile Management**: Personal information updates
- **Booking History**: Past and upcoming reservations
- **Payment Methods**: Saved cards and payment options
- **Preferences**: Travel preferences and notifications
- **Loyalty Points**: Rewards and benefits tracking

#### **Booking Management**
- **Active Bookings**: Current and upcoming stays
- **Booking History**: Past reservations
- **Cancellation**: Easy booking cancellation
- **Modifications**: Date and guest count changes
- **Receipts**: Downloadable booking confirmations

### 🏨 **Hotel Owner Dashboard**

#### **Property Management**
- **Hotel Registration**: Complete property setup
- **Basic Information**: Name, address, contact details
- **Property Description**: Detailed hotel information
- **Image Upload**: Multiple property photos
- **Location Services**: GPS coordinates and maps

#### **Room Management**
- **Add Rooms**: Create new room types
- **Room Types**: Single, Double, Luxury, Family Suite
- **Pricing**: Set rates per night
- **Availability**: Manage booking calendar
- **Amenities**: Select room facilities
- **Images**: Upload room photos

#### **Booking Management**
- **Reservation Dashboard**: All incoming bookings
- **Booking Details**: Guest information and requirements
- **Status Updates**: Confirm, modify, or cancel bookings
- **Communication**: Direct messaging with guests
- **Check-in/Check-out**: Manage guest arrivals

#### **Analytics & Reports**
- **Revenue Tracking**: Daily, monthly, yearly earnings
- **Booking Statistics**: Occupancy rates and trends
- **Guest Analytics**: Customer demographics
- **Performance Metrics**: Rating and review analysis
- **Financial Reports**: Detailed income statements

### 💳 **Payment System**

#### **Stripe Integration**
- **Secure Processing**: PCI-compliant payment handling
- **Multiple Methods**: Credit cards, debit cards, digital wallets
- **International Support**: Global payment methods
- **Currency Support**: Multiple currency options
- **Fraud Protection**: Advanced security measures

#### **Booking Flow**
- **Price Calculation**: Real-time total computation
- **Tax Calculation**: Automatic tax computation
- **Payment Confirmation**: Instant payment verification
- **Receipt Generation**: Automated booking receipts
- **Refund Processing**: Easy cancellation refunds

### 📧 **Email Notifications**

#### **Automated Emails**
- **Booking Confirmation**: Instant booking confirmations
- **Payment Receipts**: Transaction confirmations
- **Check-in Reminders**: Pre-arrival notifications
- **Cancellation Notices**: Booking cancellation confirmations
- **Promotional Emails**: Special offers and deals

#### **Email Templates**
- **Professional Design**: Branded email templates
- **Mobile Responsive**: Optimized for all devices
- **Multilingual Support**: Multiple language options
- **Personalization**: Customized content per user

### 🔍 **Search & Discovery**

#### **Smart Search**
- **Natural Language**: Conversational search queries
- **Auto-suggestions**: Intelligent search recommendations
- **Filters**: Advanced filtering options
- **Sorting**: Multiple sorting criteria
- **Saved Searches**: Bookmark search preferences

#### **Recommendation Engine**
- **Personalized Suggestions**: Based on booking history
- **Trending Properties**: Popular hotels in real-time
- **Similar Properties**: Recommendations based on preferences
- **Seasonal Recommendations**: Time-based suggestions
- **Location-based**: Nearby property suggestions

---

## 🚀 Installation Guide

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account
- Clerk account
- Stripe account
- Cloudinary account
- Brevo account (for email)

### **Step 1: Clone Repository**
```bash
git clone https://github.com/your-username/HomeStay.git
cd HomeStay
```

### **Step 2: Backend Setup**
```bash
cd backend
npm install
```

### **Step 3: Frontend Setup**
```bash
cd ../frontend
npm install
```

### **Step 4: Environment Configuration**
Create `.env` files in both frontend and backend directories with the required variables (see Environment Variables section).

### **Step 5: Database Setup**
```bash
cd ../backend
npm run seed-production
```

### **Step 6: Start Development Servers**
```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
cd frontend
npm run dev
```

---

## 🔐 Environment Variables

### **Backend (.env)**
```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/HomeStay
DB_NAME=HomeStay

# Authentication
CLERK_WEBHOOK_SECRET=whsec_your_webhook_secret

# Payment
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_stripe_webhook_secret

# Email
SMTP_USER=your_brevo_email
SMTP_PASS=your_brevo_password
SENDER_EMAIL=noreply@homestay.com

# Image Storage
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Server
PORT=5000
NODE_ENV=development
```

### **Frontend (.env)**
```env
# Backend API
VITE_BACKEND_URL=http://localhost:5000

# Authentication
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key

# Currency
VITE_CURRENCY=$
```

---

## 📚 API Documentation

### **Authentication Endpoints**
- `POST /api/user` - Get user profile
- `POST /api/user/store-recent-search` - Save search history
- `POST /api/hotels/register` - Register as hotel owner
- `GET /api/hotels/check-owner/:userId` - Check owner status

### **Hotel Endpoints**
- `GET /api/rooms` - Get all available rooms
- `GET /api/rooms/:id` - Get specific room details
- `POST /api/rooms` - Add new room (owner only)
- `PUT /api/rooms/:id` - Update room details (owner only)
- `DELETE /api/rooms/:id` - Delete room (owner only)

### **Booking Endpoints**
- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Cancel booking

### **Webhook Endpoints**
- `POST /api/clerk-webhooks` - Clerk authentication webhooks
- `POST /api/stripe-webhooks` - Stripe payment webhooks

---

## 🚀 Deployment

### **Frontend (Vercel)**
1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on git push

### **Backend (Render)**
1. Connect GitHub repository to Render
2. Set environment variables in Render dashboard
3. Configure build and start commands
4. Deploy automatically on git push

### **Database (MongoDB Atlas)**
1. Create cluster on MongoDB Atlas
2. Configure network access and database users
3. Update connection string in environment variables

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📬 Contact

**Abinash Das**
- Email: [aditya21cse@gmail.com](aditya21cse@gmail.com)
- GitHub: [aditya-cse-21](https://github.com/aditya-cse-21)
- LinkedIn: [adityaacse](https://linkedin.com/in/adityaacse)

---

## 🙏 Acknowledgments

- **Clerk** for seamless authentication
- **Stripe** for secure payment processing
- **Cloudinary** for image management
- **MongoDB** for reliable database services
- **Vercel** and **Render** for hosting solutions
- **Tailwind CSS** for beautiful UI components
- **React** team for the amazing framework

---

*Built with ❤️ by Aditya*



