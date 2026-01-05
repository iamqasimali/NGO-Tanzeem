import { motion } from 'framer-motion';
import { Award, Target, Heart, Users } from 'lucide-react';
import Container from '../components/common/Container';
import { organizationInfo } from '../data/content';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every challenge with empathy and understanding',
    },
    {
      icon: Target,
      title: 'Dedication',
      description: 'Committed to making a lasting impact in our communities',
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'Building a society where everyone has equal opportunities',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for the highest standards in all our programs',
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Learn more about our mission, vision, and the people behind Tanzeem Falah Insaniyat
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-accent-50 to-accent-100 p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold text-primary-500 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To empower communities in Gilgit-Baltistan through sustainable development programs
                focusing on education, healthcare, and economic opportunities, ensuring every
                individual has access to basic necessities and the tools to build a better future.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold text-primary-500 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                A thriving, educated, and healthy society in Baltistan where all people,
                regardless of gender or background, have equal access to opportunities and
                resources to reach their full potential.
              </p>
            </motion.div>
          </div>

          {/* Our Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-6 text-center">
              Our Story
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-gray-700 text-lg leading-relaxed">
              {organizationInfo.aboutText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <p>
                For over two decades, we have been working tirelessly to bridge the gap in
                education, healthcare, and economic development. Our programs have touched
                thousands of lives, creating ripple effects of positive change throughout the
                region.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent-100 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-500 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
