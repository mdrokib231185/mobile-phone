import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';

function App() {
  const [mobile, setMobile] = useState([]);

  useEffect(() => {
            fetch('products.json')
                  .then(res => res.json())
                  .then(data => console.log(data))
      }, []);
  return (
    <div>
      <Header></Header>
    </div>
  );
}

export default App;
