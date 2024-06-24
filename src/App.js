import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainContent></MainContent>
    </div>
  );
}

export default App;
