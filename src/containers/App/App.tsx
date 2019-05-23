import React from 'react';
import './App.css';
import HeaderBottom from '../../components/Header/HeaderBottom'
import HeaderTop from '../../components/Header/HeaderTop'
import LeftSidebar from '../../components/LeftSidebar'
import Banner from '../../components/Banner'
import Category from '../../components/Category'
import Content from '../../components/Content'

const App: React.FC = () => {
  return (
    <div className="container">
      <header className="App-header">
        <HeaderTop />
        <HeaderBottom />
      </header>

      <main>
          <LeftSidebar />
          <Banner />
          <Category />
          <Content />
      </main>

    </div>
  );
}

export default App;
