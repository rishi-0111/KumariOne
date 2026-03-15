# KumariOne Admin Portal Documentation

## Overview

The KumariOne Admin Portal is a comprehensive dashboard system for managing the smart tourism platform. It provides administrators with tools to manage users, businesses, vendors, bookings, and platform data in real-time.

## Features

### 1. Dashboard Home
- **Analytics Cards**: Display key metrics with real-time data
  - Total Users
  - Total Businesses
  - Total Bookings
  - Marketplace Revenue
  - Active Listings
  - Pending Approvals

- **Analytics Charts**:
  - Tourist visits per month (Line chart)
  - Most visited locations (Bar chart)
  - Marketplace sales trend (Area chart)
  - Booking statistics (Bar chart)

- **Quick Actions**: Fast access to pending tasks

### 2. User Management
- Search and filter users by name or email
- Display user roles: Tourist, Business Owner, Tribal Vendor, Admin
- User status tracking (Active/Inactive)
- Join date information
- Actions: Edit, Deactivate, Delete
- Pagination support

### 3. Business Verification
- Review business applications
- Display business cards with details:
  - Business name and owner
  - Location
  - Associated documents
  - Approval status
- Actions: Approve, Reject, View Details

### 4. Tribal Vendor Management
- Manage tribal vendors
- Display vendor details:
  - Vendor name
  - Tribe name
  - Products offered
  - Location
  - Status (Active/Suspended)
- Actions: Approve, Suspend, Delete

### 5. Tourism Listings Management
- Manage tourist attractions
- Display listings with:
  - Place name
  - Category
  - Location
  - Rating
- Actions: Edit listing, Delete listing
- Add new listings capability

### 6. Hidden Gems Management
- Manage hidden travel destinations
- Display:
  - Destination name
  - Location
  - Popularity score (progress bar)
- Actions: Promote, Edit, Delete

### 7. Booking Management
- Monitor all bookings
- Display:
  - Booking ID
  - User information
  - Hotel name
  - Date range
  - Payment status
- Summary cards showing total, completed, and pending bookings
- Actions: Cancel booking, Refund

### 8. Marketplace Management
- Monitor tribal products
- Display:
  - Product name
  - Vendor information
  - Price
  - Number of orders
  - Status
- Revenue tracking
- Actions: Approve product, Remove product

### 9. Review Moderation
- Moderate user reviews
- Display:
  - User name
  - Place reviewed
  - Rating
  - Review text
  - Status (Approved/Flagged/Pending)
- Actions: Delete review, Flag review

### 10. Map Data Management
- Interactive map visualization using Leaflet/OpenStreetMap
- Manage location markers by category:
  - Attractions
  - Hotels
  - Hidden Gems
  - Emergency Services
- Actions: Add marker, Edit marker, Delete marker

### 11. Emergency Monitoring
- Monitor SOS alerts from users
- Display alerts with:
  - User information
  - Location
  - Emergency type
  - Time of alert
  - Status (Active/Resolved)
- Summary showing total alerts, active alerts, and resolved alerts
- Actions: Call user, Send help

### 12. Analytics Page
- Comprehensive analytics overview
- Summary cards with trends
- Charts showing:
  - Revenue trends
  - User growth by role
  - Category breakdown
  - Monthly traffic patterns

### 13. Notification System
- Send notifications to platform users
- Compose notifications with:
  - Title
  - Message
  - Target user group (All, Tourists, Business Owners, Tribal Vendors)
- View notification history

### 14. Settings Page
- General settings:
  - Dark mode toggle
  - Language selection (English, Tamil, Hindi)
- Admin roles management
- Database management:
  - View last backup time
  - Create manual backups
- Save/Cancel options

## Technical Stack

### Frontend Technologies
- **Framework**: Next.js 16.1.6 with React 19.2.3
- **Styling**: Tailwind CSS 4
- **Charts**: Recharts
- **Maps**: React Leaflet + OpenStreetMap
- **Animations**: GSAP (for dashboard card animations)
- **Icons**: Lucide React
- **State Management**: React Context API

### Key Dependencies
```json
{
  "recharts": "^2.x",
  "react-leaflet": "^5.0.0",
  "leaflet": "^1.9.4",
  "@types/leaflet": "^1.9.x",
  "gsap": "^3.14.2"
}
```

## Design Specifications

### Color Scheme
- **Primary Color**: Purple (#9333ea)
- **Background**: White (#ffffff)
- **Accent Colors**:
  - Success: Green (#10b981)
  - Warning/Orange: Orange (#f97316)
  - Danger: Red (#ef4444)
  - Blue: Blue (#3b82f6)

### Layout
- **Sidebar Width**: 260px (collapses to icon-only on mobile)
- **Main Content**: Flexible, responsive layout
- **Cards**: Rounded corners (xl), soft shadows on hover
- **Icons**: 20px for navigation, 18px for action buttons, 16px for inline actions

### Component Styling
- Rounded cards (border-radius: 0.75rem for xl, 0.5rem for lg)
- Soft shadows (hover shadows for interactivity)
- Responsive grid (1 column mobile, 2 columns tablet, 3-4 columns desktop)
- Consistent padding and spacing

## Navigation Structure

```
/admin
├── /                    (Dashboard Home)
├── /users               (User Management)
├── /businesses          (Business Verification)
├── /vendors             (Tribal Vendor Management)
├── /listings            (Tourism Listings)
├── /hidden-gems         (Hidden Gems)
├── /bookings            (Booking Management)
├── /marketplace         (Marketplace Management)
├── /reviews             (Review Moderation)
├── /map-data            (Map Data Management)
├── /emergency           (Emergency Monitoring)
├── /analytics           (Analytics Dashboard)
├── /notifications       (Notification System)
└── /settings            (Settings)
```

## Animations

### Dashboard Cards
- **Entry Animation**: Fade-in with upward movement
  - Duration: 0.6s
  - Stagger: 0.1s between cards
  - Easing: power3.out

### Sidebar
- **Hover Effects**: Background color transitions
- **Toggle Animation**: Smooth width transition (300ms)

### Interactive Elements
- **Button Hover**: Background color and shadow transitions
- **Navigation Links**: Active state highlighting with purple background

## Responsive Behavior

### Mobile (< 768px)
- Sidebar collapses to icon-only mode
- Navigation icons remain visible
- Text labels hidden (visible on hover/mobile menu)
- Single column grid layout
- Action buttons show icons only, with labels in tooltip/hover

### Tablet (768px - 1024px)
- Sidebar maintains width but can collapse
- 2 column grid for cards and charts
- Text labels visible on sidebar

### Desktop (> 1024px)
- Full sidebar with labels always visible
- 3-4 column grid layouts
- Hover effects fully enabled

## Getting Started

### Access the Admin Portal
1. Navigate to `/admin` from your browser
2. Authentication is handled through the existing auth system
3. Only admin users can access the portal

### Using Admin Features

#### Add New Items
- Click the "Add" button on respective management pages
- Fill in required information
- Submit to create new entry

#### Search and Filter
- Use search bars to find specific items
- Use dropdowns to filter by category or status
- Pagination controls navigate through results

#### Take Actions
- Hover over action buttons to see labels (on mobile, labels show inline)
- Click action buttons to perform operations
- Confirm destructive actions (delete/deactivate)

## Best Practices

### Data Management
- Always verify changes before submitting
- Use search to locate items before editing
- Maintain regular backups (Settings > Database)

### User Management
- Deactivate users instead of immediate deletion when possible
- Review flagged content regularly
- Process pending approvals promptly

### Emergency Response
- Monitor emergency alerts for quick response
- Update alert status promptly
- Maintain emergency contact information

## Performance Considerations

- Charts are lazy-loaded and only render when visible
- Maps use dynamic imports to avoid SSR issues
- Images are optimized for web
- Database queries are paginated for large datasets

## Security Notes

- All admin actions are logged (to be implemented)
- Role-based access control is enforced
- Sensitive operations require additional confirmation
- Backups should be stored securely

## Future Enhancements

- [ ] Action logging and audit trail
- [ ] Advanced filtering with multiple criteria
- [ ] Export functionality (CSV, Excel)
- [ ] Bulk operations support
- [ ] Custom date range analytics
- [ ] Admin activity dashboard
- [ ] Role-based permission customization
- [ ] SMS/Email notifications integration
- [ ] Real-time data updates with WebSockets
- [ ] Mobile app for admin management

## Support

For issues or feature requests related to the admin portal, please contact the development team or submit issues on the project repository.
