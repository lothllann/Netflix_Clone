
import categories from './api';
import './App.css';
import Banner from './components/Banner/Banner.js';
import Nav from './components/Nav/Nav';
import Row from './components/Row/Row.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />     
      {categories.map((category) => {
        return <Row
          key={category.name}
          title={category.title}
          path={category.path}
          isLarge={category.isLarge}
          />
      })}

    </div>
  );
}

export default App;
