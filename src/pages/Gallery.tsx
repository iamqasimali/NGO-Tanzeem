import { motion } from 'framer-motion';
import { useState } from 'react';
import Container from '../components/common/Container';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800',
      title: 'Education Programs',
      category: 'Education',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800',
      title: 'Women Empowerment',
      category: 'Women Literacy',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800',
      title: 'Healthcare Services',
      category: 'Health',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800',
      title: 'Agriculture Development',
      category: 'Agriculture',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800',
      title: 'Community Gatherings',
      category: 'Community',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800',
      title: 'School Buildings',
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
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
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
