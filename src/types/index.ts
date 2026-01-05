export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
}

export interface ImpactCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconBgColor: string;
  iconColor: string;
}

export interface Stat {
  number: string;
  label: string;
  icon: string;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

// Explicit exports for module resolution
export type {
  Program,
  ImpactCard,
  Stat,
  NavLink,
  SocialLink,
  ContactInfo,
};
