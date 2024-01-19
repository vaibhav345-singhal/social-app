import { useState } from 'react';
import './App.css'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import PostListContextProvider from '../store/Create-post-store';
import { Outlet } from 'react-router-dom';

const App = () => {

  return (
    <PostListContextProvider>
      <div className='main-container'>
        <Sidebar />
        <div className='main-sub-container'>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListContextProvider>
  )
}

export default App;