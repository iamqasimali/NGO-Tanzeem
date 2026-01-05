import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { navLinks, organizationInfo, contactInfo } from '../../data/content';
import Container from '../common/Container';

const Footer = () => {
  const socialIcons = {
    Facebook: Facebook,
    Twitter: Twitter,
    Instagram: Instagram,
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
                    className="text-sm text-gray-300 hover:text-accent-400 transition-colors"
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
              {Object.entries(socialIcons).map(([name, Icon]) => (
                <a
                  key={name}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-500 transition-colors"
                  aria-label={name}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-300 mb-2">Get our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-l-lg text-gray-900 text-sm focus:outline-none"
                />
                <button className="bg-accent-500 px-4 py-2 rounded-r-lg hover:bg-accent-600 transition-colors text-sm font-semibold">
                  Subscribe
                </button>
              </div>
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
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
