import './App.css';
import CarList from './components/carlist';
import CarDetail from './components/cardetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <main className='min-h-screen'>
          <Routes>
            <Route path="/cardetail" element={<CarDetail />} />
            <Route path="/" element={<CarList />} />
          </Routes>

        </main>
        <Footer/>
      </div>
      
    </Router>
  );
}

export default App;