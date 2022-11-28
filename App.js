import togocup from './togocup.png';
import './App.css';


function App() {
  const title = '';

  let randomTempList = ['hot', 'iced', 'frozen', 'hot', 'hot', 'extra-hot'];
  let randomFlavList = ['caramel', 'white-chocolate', 'amaretto', 'raspberry', 'creme de menth', 'salted caramel', 'plain'];
  let randomCoffeeList = ['latte', 'cappuccino', 'machiato', 'frappeccino', 'mocha', 'espresso', 'drip'];

  function displayDrink(e) {
    const randomTempIndex = Math.floor(Math.random() * randomTempList.length);
    const randomTemp = randomTempList[randomTempIndex];

    const randomFlavIndex = Math.floor(Math.random() * randomFlavList.length);
    const randomFlav = randomFlavList[randomFlavIndex];

    const randomIndex = Math.floor(Math.random() * randomCoffeeList.length);
    const randomDrink = randomCoffeeList[randomIndex];

    

    document.getElementById('cup').innerHTML = randomTemp + '  ' + randomFlav + '  ' + randomDrink
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={togocup} className="coffeeCup" alt="coffee" onClick={displayDrink} />
        <h2>
          Random Coffee Generator
        </h2>
        <p id='cup'>
          {displayDrink}
        </p>
      </header>
    </div>
  );
}

export default App;
