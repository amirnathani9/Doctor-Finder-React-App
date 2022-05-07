import './App.css';
import {Hero, Navbar, Sidebar} from './components';
import { Home } from './pages';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
