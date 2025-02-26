import './App.css';
import CheckApiButton from './CheckApiButton';
import CheckApiHttpWithPhotoshop from './CheckApiHttpWithPhotoshop';
import CheckHealthButton from './CheckHealthButton';

function App() {
  return (
    <div className="App">
      <CheckApiButton />
      <br />
      <CheckHealthButton />
      <br />
      <CheckApiHttpWithPhotoshop />
    </div>
  );
}

export default App;
