import type { Program, ImpactCard, Stat, NavLink, SocialLink, ContactInfo } from '../types';

export const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const impactCards: ImpactCard[] = [
  {
    id: '1',
    title: 'Education Support',
    description: 'Providing quality education to remote areas',
    icon: 'GraduationCap',
    iconBgColor: 'bg-accent-100',
    iconColor: 'text-accent-600',
  },
  {
    id: '2',
    title: 'Health Services',
    description: 'Basic healthcare facilities for communities',
    icon: 'Heart',
    iconBgColor: 'bg-gray-100',
    iconColor: 'text-gray-600',
  },
  {
    id: '3',
    title: 'Women Literacy',
    description: 'Empowering women through education',
    icon: 'Users',
    iconBgColor: 'bg-accent-100',
    iconColor: 'text-accent-600',
  },
  {
    id: '4',
    title: 'Agriculture Development',
    description: 'Sustainable farming practices',
    icon: 'Sprout',
    iconBgColor: 'bg-gray-100',
    iconColor: 'text-gray-600',
  },
];

export const programs: Program[] = [
  {
    id: '1',
    title: 'Education in Remote Areas',
    description: 'Establishing schools and providing educational materials to children in remote villages of Baltistan.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800',
    icon: 'BookOpen',
  },
  {
    id: '2',
    title: 'Basic Health Facilities',
    description: 'Providing medical care, health awareness, and essential medical supplies to underserved areas.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800',
    icon: 'Stethoscope',
  },
  {
    id: '3',
    title: 'Female Literacy Initiatives',
    description: 'Creating opportunities for women and girls to access education and skill development programs.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800',
    icon: 'BookMarked',
  },
  {
    id: '4',
    title: 'Agriculture & Land Development',
    description: 'Promoting sustainable agricultural practices and land development for food security.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800',
    icon: 'Tractor',
  },
];

export const stats: Stat[] = [
  {
    number: '5,000+',
    label: 'Lives Impacted',
    icon: 'Users',
  },
  {
    number: '15+',
    label: 'Active Projects',
    icon: 'TrendingUp',
  },
  {
    number: '20+',
    label: 'Years of Service',
    icon: 'Award',
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    url: '#',
    icon: 'Facebook',
  },
  {
    name: 'Twitter',
    url: '#',
    icon: 'Twitter',
  },
  {
    name: 'Instagram',
    url: '#',
    icon: 'Instagram',
  },
];

export const contactInfo: ContactInfo = {
  address: 'Khumra Roundu, Gilgit-Baltistan, Pakistan',
  phone: '+92 355 4196378  +92 341 8907668',
  email: 'falahinsaniyat1122a@gmail.com',
};

export const organizationInfo = {
  name: 'Tanzeem Falah Insaniyat',
  subtitle: 'Khumra Roundu',
  tagline: 'Building an Educated, Healthy & Inclusive Society in Baltistan',
  description: 'Improving lives through education, healthcare, and community participation',
  aboutText: [
    'Tanzeem Falah Insaniyat Khumra Roundu is a registered social welfare organization dedicated to improving the lives of communities in the remote regions of Gilgit-Baltistan.',
    'Registered under the Voluntary Social Welfare Agencies Ordinance 1961, we work tirelessly to provide education, healthcare, and development opportunities to underserved populations.',
  ],
  registrationInfo: {
    badge: 'Government Registered',
    ordinance: 'Voluntary Social Welfare Agencies Ordinance 1961',
  },
};
