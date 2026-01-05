# Tanzeem Falah Insaniyat Khumra Roundu - NGO Website

A modern, responsive website for Tanzeem Falah Insaniyat, a registered social welfare organization dedicated to improving lives in Gilgit-Baltistan through education, healthcare, and community development.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Type-Safe**: Full TypeScript implementation for better code quality
- **Accessible**: ARIA labels and keyboard navigation support

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: TailwindCSS 4
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navigation header with sticky scroll
│   │   ├── Footer.tsx          # Footer with links and contact info
│   │   └── Layout.tsx          # Main layout wrapper
│   ├── home/
│   │   ├── Hero.tsx            # Hero section with CTA
│   │   ├── Impact.tsx          # Impact cards section
│   │   ├── About.tsx           # Who We Are section
│   │   ├── Programs.tsx        # Programs showcase
│   │   └── Stats.tsx           # Statistics section
│   └── common/
│       ├── Button.tsx          # Reusable button component
│       ├── Card.tsx            # Card component with hover effects
│       └── Container.tsx       # Container wrapper with max-width
├── pages/
│   ├── Home.tsx                # Homepage with all sections
│   ├── About.tsx               # About page
│   ├── Programs.tsx            # Programs page
│   ├── Gallery.tsx             # Photo gallery with filters
│   └── Contact.tsx             # Contact page with form
├── types/
│   └── index.ts                # TypeScript interfaces
├── data/
│   └── content.ts              # Site content and data
├── App.tsx                     # Main app with routing
├── main.tsx                    # App entry point
└── index.css                   # Global styles and TailwindCSS config
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd NGO-Tanzeem
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Design System

### Colors

- **Primary Navy**: `#1A3A52` - Headers, footer, primary text
- **Primary Gold**: `#D4AF37` - CTA buttons, accents
- **Secondary Gray**: `#F8F9FA` - Section backgrounds
- **Text Dark**: `#1F2937` - Primary text color
- **Text Light**: `#6B7280` - Secondary text color

### Typography

- **Font Family**: Inter (system font fallback)
- **Hero Title**: 48-56px, bold
- **Section Titles**: 32-36px, bold
- **Card Titles**: 20-24px, semibold
- **Body Text**: 16px, regular

## Pages

### Home
- Hero section with organization mission
- Impact cards showcasing key focus areas
- About section with registration badge
- Programs preview with images
- Statistics section

### About
- Organization mission and vision
- Complete story and background
- Core values
- Registration information

### Programs
- Detailed program descriptions
- Visual program cards
- Call-to-action for involvement

### Gallery
- Photo gallery with category filters
- Hover effects and smooth animations
- Responsive grid layout

### Contact
- Contact information cards
- Contact form with validation
- Email subscription

## Customization

### Update Content

Edit the content in `src/data/content.ts`:

```typescript
export const organizationInfo = {
  name: 'Your Organization Name',
  subtitle: 'Your Subtitle',
  tagline: 'Your Tagline',
  // ...
};
```

### Update Colors

Modify colors in `src/index.css`:

```css
@theme {
  --color-navy: #1A3A52;
  --color-gold: #D4AF37;
  /* ... */
}
```

### Add New Pages

1. Create a new component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/data/content.ts`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

## License

Copyright © 2025 Tanzeem Falah Insaniyat Khumra Roundu. All rights reserved.

## Contact

- **Email**: info@tanzeemfalah.org
- **Phone**: +92 XXX XXXXXXX
- **Address**: Khumra Roundu, Gilgit-Baltistan, Pakistan

## Acknowledgments

- Built with React and TailwindCSS
- Icons by Lucide React
- Images from Unsplash

---

Made with ❤️ for communities in Gilgit-Baltistan
