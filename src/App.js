import { useState } from 'react';
import './App.css';
import AllGun from './component/AllGun/AllGun';
import Navbar from './component/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const increaserCount = () => setCount(count + 1);
  return (
    <div className="App">
      <Navbar count={count}> </Navbar>
      <AllGun increaserCount={increaserCount} />
    </div>
  );
}

export default App;
