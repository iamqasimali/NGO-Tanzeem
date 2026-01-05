import { motion } from 'framer-motion';
import { Award, Target, Heart, Users, Eye, Handshake } from 'lucide-react';
import Container from '../components/common/Container';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Inclusion',
      description: 'Embracing diversity and ensuring equal opportunities for all',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Working together with local communities for sustainable development',
    },
    {
      icon: Handshake,
      title: 'Cooperation',
      description: 'Building partnerships with government and civil society',
    },
    {
      icon: Award,
      title: 'Heritage',
      description: 'Preserving and celebrating local culture and traditions',
    },
  ];

  const leaders = [
    { title: 'Executive Director', description: 'Overall leadership and strategic direction' },
    { title: 'Program Manager', description: 'Oversees program implementation and monitoring' },
    { title: 'Community Liaison', description: 'Connects with local communities and stakeholders' },
    { title: 'Finance Officer', description: 'Manages financial operations and transparency' },
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1668752752839-1ca9a96331fa?q=80&w=2000"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-500/70"></div>
        </div>
        <Container className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Dedicated to transforming lives in Gilgit-Baltistan
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Tanzeem Falah Insaniyat Khumra Roundu was established with a vision to create sustainable 
                development and improve the quality of life for communities in the remote regions of 
                Gilgit-Baltistan, Pakistan.
              </p>
              <p className="text-gray-700 mb-4">
                Our organization works at the grassroots level, focusing on the most vulnerable and 
                underserved populations in Tehsil Roundu, District Skardu. We believe in community-driven 
                development that respects local culture, traditions, and values.
              </p>
              <p className="text-gray-700">
                Through our comprehensive approach addressing education, health, women's empowerment, 
                and sustainable agriculture, we are creating lasting positive change in the lives of 
                thousands of individuals and families.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl border h-full border-t-4 border-t-accent-500 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-10 h-10 text-accent-500" />
                  <h2 className="text-2xl font-bold text-primary-500">Our Vision</h2>
                </div>
                <p className="text-gray-700">
                  To create an educated, healthy, and inclusive society in Baltistan where every 
                  individual has access to quality education, healthcare, and opportunities for 
                  personal and community development.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl border h-full border-t-4 border-t-primary-500 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-10 h-10 text-primary-500" />
                  <h2 className="text-2xl font-bold text-primary-500">Our Mission</h2>
                </div>
                <p className="text-gray-700">
                  To empower communities through sustainable programs in education, healthcare, 
                  women's empowerment, and agricultural development while preserving local heritage 
                  and promoting community participation.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and commitment to communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl border h-full hover:shadow-lg transition-shadow p-6 text-center">
                  <div className="w-16 h-16 bg-accent-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-accent-500" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-500 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Legal Registration Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl border border-l-4 border-l-accent-500 p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-20 h-20 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-12 h-12 text-accent-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary-500 mb-4">Legal Registration</h2>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Organization:</strong> Tanzeem Falah Insaniyat Khumra Roundu</p>
                      <p><strong>Type:</strong> Registered Social Welfare Organization</p>
                      <p><strong>Registration Authority:</strong> Voluntary Social Welfare Agencies Ordinance 1961</p>
                      <p><strong>Government Affiliation:</strong> Government of Gilgit-Baltistan</p>
                      <p><strong>Location:</strong> Khumra, Tehsil Roundu, District Skardu, Gilgit-Baltistan, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated team members committed to community development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl border h-full p-6 text-center">
                  <div className="w-20 h-20 bg-accent-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-accent-500" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-500 mb-2">{leader.title}</h3>
                  <p className="text-gray-600 text-sm">{leader.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
