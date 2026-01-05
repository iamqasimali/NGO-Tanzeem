import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, Heart, Users, Wheat, 
  BookOpen, Stethoscope, Baby, Sprout 
} from 'lucide-react';
import Container from '../components/common/Container';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'Education Programs',
      description: 'Providing quality education to children in remote areas of Baltistan through school establishment, teacher training, and educational materials.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000',
      icon: GraduationCap,
      iconBg: 'bg-accent-500',
      outcomes: [
        { icon: BookOpen, text: 'Established 5+ learning centers in remote villages' },
        { icon: Users, text: 'Educated 500+ children annually' },
        { icon: GraduationCap, text: 'Trained 20+ community teachers' },
      ],
    },
    {
      id: 2,
      title: 'Health Initiatives',
      description: 'Delivering basic healthcare services, health awareness programs, and medical supplies to underserved communities.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000',
      icon: Heart,
      iconBg: 'bg-primary-500',
      outcomes: [
        { icon: Stethoscope, text: 'Conduct monthly health camps' },
        { icon: Baby, text: 'Maternal and child health programs' },
        { icon: Heart, text: 'Health awareness for 1000+ families' },
      ],
    },
    {
      id: 3,
      title: 'Women & Girls Development',
      description: 'Empowering women through literacy programs, skill development, and creating opportunities for economic independence.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000',
      icon: Users,
      iconBg: 'bg-accent-500',
      outcomes: [
        { icon: BookOpen, text: 'Literacy classes for 200+ women' },
        { icon: Users, text: 'Vocational training programs' },
        { icon: Heart, text: 'Women leadership development' },
      ],
    },
    {
      id: 4,
      title: 'Agriculture & Food Security',
      description: 'Promoting sustainable agricultural practices, land development, and food security initiatives for local farmers.',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1000',
      icon: Wheat,
      iconBg: 'bg-primary-500',
      outcomes: [
        { icon: Sprout, text: 'Sustainable farming training' },
        { icon: Wheat, text: 'Improved crop yields' },
        { icon: Users, text: 'Support for 300+ farming families' },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000"
            alt="Our Programs"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Programs</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Comprehensive initiatives for sustainable community development
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Programs Section */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-xl border overflow-hidden hover:shadow-xl transition-shadow h-full">
                    {/* Image Section */}
                    <div className="relative h-48">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className={`absolute top-4 left-4 w-12 h-12 ${program.iconBg} rounded-full flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary-500 mb-3">{program.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{program.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-accent-500 text-sm">Key Outcomes:</h4>
                        {program.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <outcome.icon className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{outcome.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-700 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Our Programs</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
              Your contribution helps us expand our reach and create lasting impact in more communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <button className="px-8 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-md transition-colors font-semibold">
                  Donate Now
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-500 rounded-md transition-colors font-semibold">
                  Get Involved
                </button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default Programs;
