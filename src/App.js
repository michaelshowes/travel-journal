import './App.scss';
import Destinations from './components/Destinations/Destinations';
import Header from './components/Header/Header';
import data from './data/destinations.json';


function App() {
  const destinations = data.map(item => {
    return (
      <Destinations
        key={ item.id }
        img={ item.img }
        country={ item.country }
        destination={ item.destination }
        start_date={ item.start_date }
        end_date={ item.end_date }
        description={ item.description }
        map={ item.map }
      />
    )
  })
  return (
    <div className="App">
      <Header />
      <main>
        { destinations }
      </main>
    </div>
  );
}

export default App;
