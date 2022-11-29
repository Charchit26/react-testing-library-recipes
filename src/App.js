import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
              <Link to="/">Home</Link>
              <br/>
              <Link to="/parent">Parent child</Link>
              <br/>
              <Link to="/loader">LoaderWithAPICall</Link>
              <br/>
        </nav>
      </header>
    </div>
  );
}

export default App;
