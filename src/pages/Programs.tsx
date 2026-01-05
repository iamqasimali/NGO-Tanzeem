import { motion } from 'framer-motion';
import { BookOpen, Stethoscope, BookMarked, Tractor } from 'lucide-react';
import { programs } from '../data/content';
import Container from '../components/common/Container';
import Card from '../components/common/Card';

const iconMap = {
  BookOpen,
  Stethoscope,
  BookMarked,
  Tractor,
};

const Programs = () => {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Comprehensive initiatives designed to create lasting positive change
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = iconMap[program.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="flex flex-col md:flex-row overflow-hidden h-full">
                    <div className="md:w-2/5 relative h-64 md:h-auto">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-primary-500/20"></div>
                    </div>
                    <div className="md:w-3/5 p-8">
                      <div className="w-14 h-14 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-accent-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary-500 mb-4">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-primary-500">Key Focus Areas:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>Community outreach and awareness</li>
                          <li>Resource allocation and distribution</li>
                          <li>Long-term sustainability planning</li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved</h2>
            <p className="text-xl text-gray-100 mb-8">
              Your support can make a real difference in the lives of people in Baltistan.
              Join us in our mission to create positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-colors">
                Donate Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-500 transition-colors">
                Become a Volunteer
              </button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default Programs;
