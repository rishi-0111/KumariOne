# KumariOne - Smart Tourism Platform

A comprehensive smart tourism platform designed to connect tourists, tribal communities, and local businesses. KumariOne provides an intelligent platform for discovering hidden gems, booking experiences, and supporting tribal vendors across India.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)
![React](https://img.shields.io/badge/React-19.2.3-61dafb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06b6d4)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791)
![GSAP](https://img.shields.io/badge/GSAP-3.14.2-88ce02)

## 🌍 Project Overview

KumariOne is a platform that bridges the gap between tourists seeking authentic experiences and tribal communities offering unique cultural and heritage tourism products. The platform features:

- **Tourist Management** - User profiles, bookings, and experience management
- **Tribal Vendor Support** - Vendor registration, product listings, and order management
- **Business Verification** - Secure business owner onboarding and verification
- **Marketplace** - Product catalog with ratings and reviews
- **Hidden Gems Discovery** - Curated local attractions and experiences
- **Emergency SOS** - Real-time emergency response system
- **Analytics Dashboard** - Comprehensive business intelligence for admins

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16.1.6 with App Router
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP 3.14.2
- **Charts**: Recharts 2.x
- **Maps**: React Leaflet 5.0.0 with OpenStreetMap
- **Icons**: Lucide React
- **State Management**: React Context API

### Backend
- **Runtime**: Node.js with Express.js
- **Authentication**: JWT (JSON Web Tokens)
- **Password Security**: bcryptjs
- **Email**: Nodemailer

### Database
- **Primary DB**: PostgreSQL 15
- **Geospatial**: PostGIS extension
- **Caching**: Redis (for sessions)

### DevOps
- **Containerization**: Docker & Docker Compose
- **Version Control**: Git & GitHub

## 📁 Project Structure

```
kumariOne/
├── frontend/                 # Next.js application
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   │   ├── admin/       # Admin dashboard (15 pages)
│   │   │   ├── dashboard/   # User dashboard
│   │   │   ├── login/       # Authentication
│   │   │   ├── signup/
│   │   │   ├── hotels/
│   │   │   ├── marketplace/
│   │   │   ├── hidden-gems/
│   │   │   └── ...
│   │   ├── components/      # Reusable React components
│   │   │   ├── admin/       # Admin-specific components
│   │   │   ├── Navbar.tsx
│   │   │   ├── MapComponent.tsx
│   │   │   └── ...
│   │   ├── context/         # React Context providers
│   │   ├── services/        # API client utilities
│   │   └── animations/      # GSAP animation utilities
│   ├── public/              # Static assets
│   ├── package.json
│   ├── tailwind.config.ts
│   └── tsconfig.json
│
├── backend/                 # Express.js API server
│   ├── package.json
│   └── ...
│
├── database/                # Database schemas and migrations
│   ├── schema.sql
│   └── migrations/
│
├── infrastructure/          # DevOps & deployment config
│   ├── docker-compose.yml
│   └── ...
│
├── docs/                    # Documentation
│   ├── ADMIN_PORTAL_DOCS.md
│   ├── ADMIN_QUICKSTART.md
│   └── API_REFERENCE.md
│
├── LICENSE
└── README.md
```

## ✨ Key Features

### 🎯 User Features
- **User Registration & Authentication** - Secure signup with JWT tokens
- **Profile Management** - User preferences and booking history
- **Hotel & Experience Booking** - Browse and book accommodations and activities
- **Reviews & Ratings** - Community feedback system
- **Voice Search** - Natural language search for experiences
- **Emergency SOS** - One-tap emergency assistance feature
- **Hidden Gems Discovery** - Curated local attractions with popularity scores
- **Interactive Map** - Explore locations with geospatial data

### 👨‍💼 Business Owner Features
- **Business Registration & Verification** - Submit documents for verification
- **Listings Management** - Create and manage tourism listings
- **Booking Management** - View and process bookings
- **Analytics** - Track business performance and metrics
- **Profile Customization** - Branding and business information

### 🏪 Tribal Vendor Features
- **Vendor Registration** - Easy tribal business onboarding
- **Product Catalog** - Add and manage products
- **Order Management** - Process customer orders
- **Revenue Tracking** - Monitor earnings and sales
- **Community Support** - Access support resources

### 👨‍💻 Admin Features (15-Page Dashboard)
1. **Dashboard** - Overview with analytics cards and charts
2. **User Management** - View, edit, deactivate users
3. **Business Verification** - Review and approve business applications
4. **Tribal Vendor Management** - Manage vendor accounts and suspension
5. **Tourism Listings** - Moderate tourism content
6. **Hidden Gems** - Manage curated attractions and popularity
7. **Booking Management** - View and manage all bookings
8. **Marketplace** - Product approval and inventory management
9. **Review Moderation** - Approve/flag user reviews
10. **Map Data** - Location management with markers
11. **Emergency Monitoring** - Real-time SOS alert tracking
12. **Analytics** - Comprehensive business intelligence
13. **Notifications** - Send system notifications to users
14. **Settings** - Admin preferences and configuration
15. **User Activity Audit** - Track admin and user activities

### 🎨 Design Features
- **Purple Theme** - Primary color: `#9333ea`
- **White Backgrounds** - Clean, modern interface
- **Rounded Cards** - Soft UI with 8-12px border radius
- **Soft Shadows** - Subtle depth perception
- **GSAP Animations** - Smooth entry, hover, and transition effects
- **Responsive Design** - Mobile-first approach (320px → desktop)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- PostgreSQL 15
- Git
- Docker (optional)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/rishi-0111/KumariOne.git
cd KumariOne
```

2. **Install frontend dependencies**
```bash
cd frontend
npm install
```

3. **Install backend dependencies**
```bash
cd ../backend
npm install
```

4. **Setup environment variables**

Frontend (`.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_MAP_TILES_URL=https://tile.openstreetmap.org/{z}/{x}/{y}.png
```

Backend (`.env`):
```env
NODE_ENV=development
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/kumariOne
JWT_SECRET=your_jwt_secret_key_here
REDIS_URL=redis://localhost:6379
```

### Running Locally

**Terminal 1 - Frontend (Next.js Dev Server)**
```bash
cd frontend
npm run dev
# App will be available at http://localhost:3000
```

**Terminal 2 - Backend (Express.js)**
```bash
cd backend
npm run dev
# API will be available at http://localhost:5000
```

**Terminal 3 - Database (Docker)**
```bash
cd infrastructure
docker-compose up -d
# PostgreSQL will be available at localhost:5432
```

## 📊 Admin Dashboard Routes

Access the admin portal at `http://localhost:3000/admin`

| Route | Page | Features |
|-------|------|----------|
| `/admin` | Dashboard | Analytics overview, key metrics |
| `/admin/users` | User Management | Search, filter, edit, deactivate users |
| `/admin/businesses` | Business Verification | Review pending applications |
| `/admin/vendors` | Vendor Management | Manage tribal vendor accounts |
| `/admin/listings` | Tourism Listings | Moderate content, add listings |
| `/admin/hidden-gems` | Hidden Gems | Manage attractions, popularity scores |
| `/admin/bookings` | Booking Management | View/cancel bookings, track payments |
| `/admin/marketplace` | Marketplace | Product approval, inventory management |
| `/admin/reviews` | Review Moderation | Approve/flag user reviews |
| `/admin/map-data` | Map Data | Manage location markers and geospatial data |
| `/admin/emergency` | Emergency Monitoring | Real-time SOS alerts and response tracking |
| `/admin/analytics` | Analytics | Revenue, user growth, category breakdown |
| `/admin/notifications` | Notifications | Send system-wide notifications |
| `/admin/settings` | Settings | Admin preferences, roles, backup |

## 🎨 Component Architecture

### Core Components

**Layout Components**
- `AdminLayout` - Responsive sidebar + header layout
- `AdminSidebar` - Navigation with 14 menu items
- `AdminHeader` - Page title, search, notifications
- `PageTransition` - Page fade-in animation wrapper

**Data Display Components**
- `AnalyticsChart` - Recharts wrapper (line, bar, area)
- `DashboardCard` - Metrics card with trending indicator
- `AnimatedTableRow` - Reusable table row with staggered animations
- `MapComponent` - Leaflet-based interactive map

**Interactive Components**
- `ActionButton` - Reusable action button
- `SOSButton` - Emergency SOS button
- `ParticleScene` - Background particle animation
- `RotatingGlobe` - 3D globe animation

## 🎬 Animation Details

All animations use GSAP 3.14.2 for smooth 60fps performance:

### Entry Animations
- **Dashboard Cards**: Fade + scale (0.95 → 1) over 0.8s
- **Sidebar Items**: Staggered fade-in with 0.05s delay per item
- **Table Rows**: Index-based stagger (index × 0.05s)
- **Header**: Fade-in from top over 0.6s

### Hover Animations
- **Cards**: Lift up 5px with shadow enhancement (0.3s)
- **Nav Items**: Slide right 4px on hover (0.3s)
- **Buttons**: Color transition on hover

### Page Transitions
- **Page Changes**: Fade between pages (0.4s, power2.out easing)
- **Title Updates**: Opacity transition on route change (0.4s)

## 🔐 Security Features

- **JWT Authentication** - Secure token-based auth
- **Password Hashing** - bcryptjs with salt rounds
- **Role-Based Access Control (RBAC)** - Admin, moderator, support roles
- **SQL Injection Prevention** - Parameterized queries
- **CORS Protection** - Configured origin whitelist
- **Rate Limiting** - API request throttling
- **Input Validation** - Server-side validation on all endpoints

## 📱 Responsive Design Breakpoints

- **Mobile**: 320px - 767px (icons only in sidebar)
- **Tablet**: 768px - 1023px (labels appear in sidebar)
- **Desktop**: 1024px+ (full layout with 260px sidebar)

## 🧪 Testing

### Build Production Version
```bash
cd frontend
npm run build
npm run start
```

### Check for TypeScript Errors
```bash
npm run type-check
```

### View Build Analysis
```bash
npm run build:analyze
```

## 📈 Performance Optimizations

- **Code Splitting** - Dynamic imports for large components
- **Image Optimization** - Next.js Image component for automatic optimization
- **CSS Purging** - Tailwind CSS removes unused styles
- **GSAP Performance** - GPU-accelerated animations
- **Lazy Loading** - Map and chart components load on demand
- **Caching** - Browser cache headers configured
- **Compression** - Gzip enabled on production

## 🔄 Git Workflow

### Branches
- `main` - Production-ready code
- `develop` - Development integration branch
- `feature/*` - Feature development branches
- `bugfix/*` - Bug fix branches

### Committing
```bash
git add .
git commit -m "type(scope): description"
git push origin feature/your-feature
```

Commit types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## 📦 Build & Deployment

### Production Build
```bash
cd frontend
npm run build
# Output: .next/ directory with static exports
```

### Docker Deployment
```bash
docker-compose -f infrastructure/docker-compose.yml up -d
```

### Environment-Specific Configuration
- **Development** - `.env.local` with localhost URLs
- **Staging** - `.env.staging` with staging servers
- **Production** - `.env.production` with production URLs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'feat: add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Standards
- Use TypeScript for type safety
- Follow ESLint configuration
- Format code with Prettier
- Write meaningful commit messages
- Add comments for complex logic
- Test before submitting PR

## 📚 Documentation

- [Admin Portal Documentation](./docs/ADMIN_PORTAL_DOCS.md) - Detailed admin features
- [Admin Quick Start](./docs/ADMIN_QUICKSTART.md) - Quick setup guide
- [API Reference](./docs/API_REFERENCE.md) - Backend API endpoints
- [Database Schema](./database/schema.sql) - Table structure

## 🐛 Reporting Issues

Found a bug? Please create an issue on GitHub:

1. Go to [Issues](https://github.com/rishi-0111/KumariOne/issues)
2. Click "New Issue"
3. Provide clear title and description
4. Include steps to reproduce
5. Add screenshots if applicable

## 📝 License

This project is licensed under the MIT License - see [LICENSE](./LICENSE) file for details.

## 👥 Team

- **Project Lead** - Rishi
- **Full Stack Developer** - [Your Name]

## 🎯 Roadmap

### V1.0 (Current)
- ✅ User authentication & profiles
- ✅ Booking system
- ✅ Admin dashboard with 15 pages
- ✅ GSAP animations throughout
- ✅ Map integration with geospatial data
- ✅ Emergency SOS system

### V1.1 (Planned)
- 🔄 Real-time notifications with WebSockets
- 🔄 Payment gateway integration (Stripe/Razorpay)
- 🔄 Advanced search filters
- 🔄 Bulk operations in admin panel
- 🔄 Export functionality (CSV/Excel)

### V2.0 (Future)
- 📅 AI-powered recommendations
- 📅 Video streaming for listings
- 📅 Virtual tours for attractions
- 📅 Mobile app (React Native)
- 📅 Multi-language support (English, Tamil, Hindi)

## 📞 Support

For support, email support@kumarione.com or open an issue on GitHub.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for utility-first styling
- GSAP for smooth animations
- React Leaflet for mapping capabilities
- OpenStreetMap for map data
- PostgreSQL for reliable database

---

**Last Updated**: March 15, 2026  
**Version**: 1.0.0  
**Status**: ✅ Production Ready
