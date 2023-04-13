import './App.css';
import { Header } from './components/header/header';
import { Meaning } from './components/meaning/meaning';
import { SearchBar } from './components/search.jsx/search';

function App() {
  return (
    <div id='app'>
        <Header/>
        <SearchBar/>
        <Meaning/>
    </div>
  );
}

export default App;
