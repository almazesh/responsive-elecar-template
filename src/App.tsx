import './App.scss'
import Layout from './pages/Layout';
import  AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;