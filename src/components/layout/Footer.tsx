import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { navLinks, organizationInfo, contactInfo, socialLinks } from '../../data/content';
import Container from '../common/Container';

const socialIcons = {
  Facebook,
  Twitter,
  Instagram,
} as const;

const Footer = () => {
  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-primary-500 text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/assets/logo.png"
                alt="Tanzeem Falah Insaniyat"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">{organizationInfo.name}</h3>
                <p className="text-sm text-gray-300">{organizationInfo.subtitle}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Dedicated to improving lives in Gilgit-Baltistan through education, healthcare, and
              community development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 hover:text-accent-400 transition-colors cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-300">{contactInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">{contactInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">{contactInfo.email}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                if (!Icon) return null;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="min-h-[44px] min-w-[44px] cursor-pointer bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-500"
                    aria-label={`${organizationInfo.name} on ${social.name}`}
                    {...(social.url.startsWith('http') ? { rel: 'noopener noreferrer', target: '_blank' } : {})}
                  >
                    <Icon size={20} aria-hidden />
                  </a>
                );
              })}
            </div>
            <div className="mt-6">
              <p id="newsletter-label" className="text-sm text-gray-300 mb-2">
                Get our newsletter
              </p>
              <form
                className="flex w-full max-w-xs"
                onSubmit={handleNewsletterSubmit}
                aria-labelledby="newsletter-label"
              >
                <label htmlFor="footer-newsletter-email" className="sr-only">
                  Email address for newsletter
                </label>
                <input
                  id="footer-newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Your email"
                  className="w-full min-w-0 flex-1 min-h-[44px] px-3 py-2 rounded-l-lg bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400 border-0"
                />
                <button
                  type="submit"
                  className="min-h-[44px] cursor-pointer bg-accent-500 px-4 py-2 rounded-r-lg hover:bg-accent-600 transition-colors text-sm font-semibold whitespace-nowrap flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} {organizationInfo.name}. All rights reserved.
            </p>
            <p className="text-sm text-gray-300">
              Registered under Voluntary Social Welfare Agencies Ordinance 1961
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-300">
              Developed by{' '}
              <a
                href="https://quickgemsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-accent-300 transition-colors underline"
              >
                Quick Gem Solutions
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
