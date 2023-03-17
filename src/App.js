//import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import Authentication from './component/Authentication';
import { useSelector } from 'react-redux';

function App() {
  // const authenticate=useSelector((state)=>state.Authenticate.isAuthenticate)
  return (
    <div className="App">
      {/* {!authenticate && <Authentication />}
      {authenticate && <Counter />} */}
      {/* {authenticate ? <Counter /> : <Authentication />} */}
      <Counter />
    </div>
  );
}

export default App;
