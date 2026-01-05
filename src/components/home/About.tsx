import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { organizationInfo } from '../../data/content';
import Container from '../common/Container';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800"
                alt="Helping hands"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-500 rounded-full opacity-20 blur-2xl"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500 mb-6">
              Who We Are
            </h2>

            <div className="space-y-4 mb-8">
              {organizationInfo.aboutText.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Registration Badge */}
            <div className="bg-gradient-to-r from-accent-50 to-accent-100 rounded-xl p-6 border-l-4 border-accent-500">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-accent-500 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-500 mb-1">
                    {organizationInfo.registrationInfo.badge}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {organizationInfo.registrationInfo.ordinance}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
