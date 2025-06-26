import ScenicSlide from './components/ScenicSlide';

export default function App() {
  const slides = [
    {
      image: '/images/download.jpeg',
      caption: 'Peaceful Village in the Alps',
    },
    {
      image: '/images/floral-stream.jpeg',
      caption: 'Find Peace in Nature',
    },
  ];

  return (
    <main className="overflow-x-hidden">
      {slides.map((slide, index) => (
        <ScenicSlide
          key={index}
          image={slide.image}
          caption={slide.caption}
        />
      ))}
    </main>
  );
}
