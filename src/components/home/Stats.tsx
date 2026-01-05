import { motion } from 'framer-motion';
import { Users, TrendingUp, Award } from 'lucide-react';
import { stats } from '../../data/content';
import Container from '../common/Container';

const iconMap = {
  Users,
  TrendingUp,
  Award,
};

const Stats = () => {
  return (
    <section className="py-20 bg-primary-500">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</h3>
                <p className="text-lg md:text-xl text-gray-200">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Stats;
