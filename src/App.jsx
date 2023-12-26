import { useState } from 'react';
import './App.css'
import CreateForm from './components/CreateForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Posts from './components/Posts';
import Sidebar from './components/Sidebar';
import PostListContextProvider from './store/Create-post-store';


const App = () => {

  const [selectedTab, setSelectedTab] = useState("Home");

  const handleSelectedTab = (tab) => {
    setSelectedTab(tab);
  }

  return (
    <PostListContextProvider>
      <div className='main-container'>
        <Sidebar selectedTab={selectedTab} handleSelectedTab={handleSelectedTab} />
        <div className='main-sub-container'>
          <Header />

          {selectedTab === "Home" ? <Posts /> : <CreateForm />}


          <Footer />
        </div>
      </div>
    </PostListContextProvider>
  )
}

export default App;