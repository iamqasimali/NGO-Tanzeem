import { motion } from 'framer-motion';
import { GraduationCap, Heart, Users, Sprout } from 'lucide-react';
import { impactCards } from '../../data/content';
import Container from '../common/Container';
import Card from '../common/Card';

const iconMap = {
  GraduationCap,
  Heart,
  Users,
  Sprout,
};

const Impact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500 mb-4">
            Our Impact
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Making a difference in the lives of communities across Gilgit-Baltistan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactCards.map((card, index) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${card.iconBgColor} flex items-center justify-center`}
                  >
                    <Icon className={`w-8 h-8 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-primary-500 mb-3">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Impact;
