import Carousel from './Carousel';
import SlickCarousel from './SlickCarousel';

const App = () => {
  return (
    <main>
      <h4 style={{ textAlign: 'center', marginTop: '2rem' }}>
        Slider/Carousel App with React JS
      </h4>
      <Carousel />
      <h4 style={{ textAlign: 'center', marginTop: '8rem' }}>
        Slider/Carousel App with React Slick
      </h4>
      <SlickCarousel />
    </main>
  );
};
export default App;
