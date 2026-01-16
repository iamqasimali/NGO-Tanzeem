import { motion } from 'framer-motion';
import { useState } from 'react';
import Container from '../components/common/Container';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: ' https://res.cloudinary.com/dpdl2nt0f/image/upload/v1768405518/NGO_11_f3jxo6.jpg',
      title: 'Education Programs',
      category: 'Education',
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/dpdl2nt0f/image/upload/v1768321625/NGO_4_aj43r2.jpg',
      title: 'Women Empowerment',
      category: 'Women Literacy',
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/dpdl2nt0f/image/upload/v1768321624/NGO_2_iyfkzz.jpg',
      title: 'Healthcare Services',
      category: 'Health',
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/dpdl2nt0f/image/upload/v1768405519/NGO_10_dva6fk.jpg',
      title: 'Agriculture Development',
      category: 'Agriculture',
    },
    {
      id: 5,
      src: 'https://res.cloudinary.com/dpdl2nt0f/image/upload/v1768405519/NGO_9_szizco.jpg',
      title: 'Community Gatherings',
      category: 'Community',
    },
    {
      id: 6,
      src: 'https://res.cloudinary.com/dpdl2nt0f/image/upload/v1768405520/NGO_8_bkmkat.jpg',
      title: 'School Buildings',
      category: 'Education',
    },
    {
      id: 7,
      src: 'https://res.cloudinary.com/dpdl2nt0f/image/upload/v1768321625/NGO_6_uxuq1e.jpg',
      title: 'Education Programs',
      category: 'Education',
    },
    {
      id: 8,
      src: 'https://res.cloudinary.com/dpdl2nt0f/image/upload/v1768405875/NGO_13_ybmuvl.jpg',
      title: 'Education Programs',
      category: 'Education',
    },
    {
      id: 9,
      src: 'https://res.cloudinary.com/dpdl2nt0f/image/upload/v1768405875/NGO_12_tdaxad.jpg',
      title: 'Education Programs',
      category: 'Education',
    },
  ];

  const categories = ['All', ...new Set(images.map((img) => img.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages =
    activeCategory === 'All'
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000"
            alt="Gallery"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Gallery</h1>
            <p className="text-lg md:text-xl text-gray-200">
              A glimpse into our work and the communities we serve
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <Container>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-accent-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
              >
                <div className="aspect-w-4 aspect-h-3 relative h-80">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Gallery;
