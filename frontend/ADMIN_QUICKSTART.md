# Admin Portal - Quick Start Guide for Developers

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   └── admin/                    # Admin portal pages
│   │       ├── layout.tsx            # Admin layout with sidebar
│   │       ├── page.tsx              # Dashboard home
│   │       ├── users/                # User management
│   │       ├── businesses/           # Business verification
│   │       ├── vendors/              # Vendor management
│   │       ├── listings/             # Listings management
│   │       ├── hidden-gems/          # Hidden gems
│   │       ├── bookings/             # Bookings
│   │       ├── marketplace/          # Marketplace
│   │       ├── reviews/              # Review moderation
│   │       ├── map-data/             # Map management
│   │       ├── emergency/            # Emergency monitoring
│   │       ├── analytics/            # Analytics
│   │       ├── notifications/        # Notifications
│   │       └── settings/             # Settings
│   └── components/
│       └── admin/                    # Admin components
│           ├── AdminSidebar.tsx      # Navigation sidebar
│           ├── AdminHeader.tsx       # Top header
│           ├── DashboardCard.tsx     # Analytics card
│           ├── AnalyticsChart.tsx    # Chart component
│           └── ActionButton.tsx      # Action button
└── ADMIN_PORTAL_DOCS.md
```

## Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup Steps

1. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Install admin-specific packages** (if not already installed)
   ```bash
   npm install recharts react-leaflet leaflet @types/leaflet
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Access admin portal**
   - Open browser to `http://localhost:3000/admin`

## Development Workflow

### Adding a New Admin Page

1. **Create page file** in `src/app/admin/[feature]/page.tsx`:
   ```tsx
   'use client';

   export default function FeaturePage() {
     return (
       <div className="space-y-6">
         {/* Your content here */}
       </div>
     );
   }
   ```

2. **Add navigation item** in `AdminSidebar.tsx`:
   ```tsx
   const navItems = [
     // ... existing items
     { 
       label: 'Your Feature', 
       icon: YourIcon, 
       href: '/admin/your-feature' 
     },
   ];
   ```

3. **Use consistent styling**:
   - White backgrounds: `bg-white`
   - Purple primary: `text-purple-600`, `bg-purple-600`
   - Rounded cards: `rounded-xl`
   - Soft shadows: `shadow-sm hover:shadow-md`

### Creating Reusable Components

1. **Create component** in `src/components/admin/YourComponent.tsx`:
   ```tsx
   'use client';

   interface Props {
     // Your props
   }

   export default function YourComponent({ ...props }: Props) {
     return (
       <div className="bg-white rounded-xl border border-gray-200 p-6">
         {/* Component content */}
       </div>
     );
   }
   ```

2. **Import and use** in pages:
   ```tsx
   import YourComponent from '@/components/admin/YourComponent';
   ```

### Using Charts

**Line Chart**:
```tsx
import AnalyticsChart from '@/components/admin/AnalyticsChart';

<AnalyticsChart
  title="Your Chart Title"
  type="line"
  data={[
    { month: 'Jan', value: 2400 },
    { month: 'Feb', value: 2210 },
  ]}
/>
```

**Bar Chart**:
```tsx
<AnalyticsChart
  title="Your Chart Title"
  type="bar"
  data={[
    { name: 'Category A', value: 4000 },
    { name: 'Category B', value: 3000 },
  ]}
/>
```

**Area Chart**:
```tsx
<AnalyticsChart
  title="Your Chart Title"
  type="area"
  data={[
    { month: 'Week 1', value: 1200 },
    { month: 'Week 2', value: 1900 },
  ]}
/>
```

### Adding GSAP Animations

```tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function YourComponent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll('[data-item]');
      gsap.fromTo(
        items,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: 'power3.out' 
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef}>
      <div data-item>Item 1</div>
      <div data-item>Item 2</div>
    </div>
  );
}
```

## Tailwind CSS Classes Used

### Spacing
- `space-y-6`: Vertical spacing between elements
- `gap-4`: Gap between flex/grid items
- `px-6 py-4`: Padding

### Colors
- `text-gray-900`: Dark text
- `text-gray-600`: Medium text
- `text-gray-400`: Light text
- `bg-purple-600`: Purple background
- `bg-green-100`: Light green
- `border-gray-200`: Light border

### Borders & Shadows
- `border border-gray-200`: Light border
- `rounded-xl`: Large border radius
- `shadow-sm`: Small shadow
- `hover:shadow-md`: Medium shadow on hover

### Responsive
- `md:flex-row`: Flex direction on medium screens
- `lg:grid-cols-2`: 2 columns on large screens
- `hidden md:flex`: Hidden by default, visible on medium+

## Testing

### Run Build
```bash
npm run build
```

### Check for TypeScript Errors
```bash
npm run type-check
```

### Lint Code
```bash
npm run lint
```

## Common Issues

### Map Not Rendering
- Ensure `dynamic` import is used for map components
- Mark component with `'use client'`
- Check that Leaflet CSS is imported

### Charts Not Displaying
- Install Recharts: `npm install recharts`
- Ensure data array has correct structure
- Check responsive container has height

### Icons Not Found
- Verify icon name exists in lucide-react
- Common mistake: `Lifesaver` → use `Heart` instead
- Check Lucide documentation for available icons

## Performance Tips

1. **Lazy Load Components**
   ```tsx
   const MapComponent = dynamic(() => import('./MapComponent'), {
     ssr: false,
   });
   ```

2. **Memoize Components**
   ```tsx
   const MemoizedCard = memo(DashboardCard);
   ```

3. **Optimize Images**
   - Use Next.js Image component for images

4. **Pagination**
   - Implement pagination for large datasets
   - Show limited rows per page

## Code Style Guidelines

### Naming Conventions
- Components: PascalCase (`DashboardCard.tsx`)
- Files: kebab-case for pages (`user-management/page.tsx`)
- Functions/Variables: camelCase (`handleDelete`)
- CSS Classes: lowercase with hyphens (`bg-purple-600`)

### Component Structure
```tsx
'use client';

// Imports
import { useState } from 'react';

// Types/Interfaces
interface Props {
  //
}

// Component
export default function MyComponent({ }: Props) {
  // Hooks
  const [state, setState] = useState('');

  // Handlers
  const handleAction = () => {
    //
  };

  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

### Tailwind Classes Order
1. Display/Layout (`flex`, `grid`, `hidden`)
2. Sizing (`w-full`, `h-screen`)
3. Spacing (`px-4`, `py-2`)
4. Colors (`bg-white`, `text-gray-900`)
5. Borders (`border`, `rounded-lg`)
6. Shadows (`shadow-sm`)
7. Responsive (`md:flex`, `lg:grid-cols-2`)

## Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Recharts](https://recharts.org)
- [React Leaflet](https://react-leaflet.js.org)
- [GSAP Documentation](https://gsap.com/docs)
- [Lucide Icons](https://lucide.dev)

## Git Workflow

1. **Create feature branch**
   ```bash
   git checkout -b feature/your-feature
   ```

2. **Make changes** and test locally

3. **Commit changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

4. **Push to remote**
   ```bash
   git push origin feature/your-feature
   ```

5. **Create Pull Request** on GitHub

## Environment Variables

Create `.env.local` if needed:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_MAP_CENTER=28.6139,77.209
```

## Support & Questions

- Check existing documentation first
- Review similar components for examples
- Ask team members for code review
- Refer to comments in existing code

Happy coding! 🚀
