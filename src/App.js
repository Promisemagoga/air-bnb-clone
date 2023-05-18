import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import data from './data';

function App() {
  const cardElement = data.map((experiences) => {
    return <Card
      key={experiences.id}

      {...experiences}

      
      // experiences = {experiences}

      // title={experiences.title}
      // price={experiences.price}
      // img={experiences.coverImg}
      // rating={experiences.stats.rating}
      // reviewCount={experiences.stats.reviewCount}
      // location={experiences.location}
      // openSpots = {experiences.openSpots}
    />
  })
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className='cards-list'>
        {cardElement}
      </div>
    </div>
  );
}

export default App;
