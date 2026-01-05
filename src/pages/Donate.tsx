import { motion } from 'framer-motion';
import { GraduationCap, Heart, Users, Building2, Check, CreditCard } from 'lucide-react';
import Container from '../components/common/Container';
import Card from '../components/common/Card';

const Donate = () => {
  const impactAreas = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Support schools and learning materials',
      amount: 'PKR 5,000',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Fund medical camps and supplies',
      amount: 'PKR 10,000',
    },
    {
      icon: Users,
      title: 'Women Empowerment',
      description: 'Literacy and skill programs',
      amount: 'PKR 7,000',
    },
  ];

  const commitments = [
    'All donations are used directly for community programs',
    'Regular financial reports published quarterly',
    'Government registered and audited organization',
    'Direct community engagement and feedback',
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Support Our Mission</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Your generosity transforms lives in Baltistan
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">Your Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how your contribution directly helps communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {impactAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center border-t-4 border-t-accent-500">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-8 h-8 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-500 mb-2">{area.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                  <div className="text-2xl font-bold text-accent-500">{area.amount}</div>
                  <p className="text-xs text-gray-500 mt-1">Suggested contribution</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bank Details */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-l-4 border-l-accent-500">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-2xl font-bold text-primary-500 flex items-center gap-3">
                    <Building2 className="w-8 h-8 text-accent-500" />
                    Bank Account Details
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Bank Name</div>
                      <div className="font-semibold text-primary-500">JS Bank</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Account Title</div>
                      <div className="font-semibold text-primary-500">
                        Tanzeem Falah Insaniyat Khumra Roundu
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Account Number</div>
                      <div className="font-semibold text-primary-500">XXXX-XXXX-XXXX-XXXX</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Branch Code</div>
                      <div className="font-semibold text-primary-500">XXXX</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">IBAN</div>
                      <div className="font-semibold text-primary-500">PK XX JSBL XXXX XXXX XXXX XXXX</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Swift Code</div>
                      <div className="font-semibold text-primary-500">JSBLPKKA</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <CreditCard className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                      <p>
                        Please email your deposit slip to{' '}
                        <a href="mailto:info@tfiroundu.org" className="text-accent-500 hover:underline">
                          info@tfiroundu.org
                        </a>{' '}
                        to receive a donation receipt and for our records.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Transparency Commitment */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
                Our Commitment to Transparency
              </h2>
              <p className="text-lg text-gray-600">
                We believe in complete accountability and transparency in all our operations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-accent-600" />
                  </div>
                  <p className="text-gray-700">{commitment}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 text-center"
            >
              <Heart className="w-12 h-12 text-accent-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary-500 mb-2">
                Thank You for Your Support
              </h3>
              <p className="text-gray-600">
                Every donation, no matter the size, makes a meaningful difference in the lives of
                people in Baltistan.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Donate;
