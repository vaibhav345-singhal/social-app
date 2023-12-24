import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';


const App = () => {
  return (
    <div className='main-container'>
      <Sidebar />
      <div className='main-sub-container'>
        <Header />
        <Footer />
      </div>
    </div>
  )
}

export default App;