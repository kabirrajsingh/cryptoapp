import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Coin from './components/Coin';
import Coins from './components/Coins';
import Footer from './components/Footer';
import Header from './components/Header';
import News from './components/News';
import Stats from './components/Stats';
function App() {
  const [uuid,setUuid]= useState("-l8Mn2pVlRs-p")
  const uuidHandler=(event)=>{
    setUuid(event.target.value)
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Header/><Routes>
      <Route path="/" element={<><Stats/><Coins handler={setUuid} ud={uuid}/>
        <News/></>} />
        
      {/* <Route path={`/coin/${uuid}`} element={<Coin uuid={uuid}/>} /> */}
      <Route path="/coin/:id" element={<Coin/>} />
    </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
