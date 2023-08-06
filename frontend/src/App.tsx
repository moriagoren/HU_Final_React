
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Header from './components/Header';
import Login from './pages/Login';
import About from './pages/About';
import Favcards from './pages/FavCards';
import Mycards from './pages/MyCards';
import Sandbox from './pages/Sandbox';
import AddCardForm from './pages/AddCardForm';
import DetailsCards from './pages/DetailsCards';
import MyCard from './components/Card';
import EditCard from './pages/EditCardForm';
import EditCardForm from './pages/EditCardForm';

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signup' element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="Card" element={<MyCard />} />
        <Route path="about" element={<About />} />
        <Route path="favcards" element={<Favcards />} />
        <Route path="mycards" element={<Mycards />} />
        <Route path="sandbox" element={<Sandbox />} />
        <Route path="addcard" element={<AddCardForm />} />
        <Route path="EditCardForm" element={<EditCardForm />} />
        <Route path="Details" element={<DetailsCards />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
