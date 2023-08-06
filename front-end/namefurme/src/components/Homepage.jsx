import React from 'react';
import Header from './Header';
import LoginSignUp from './LoginSignUp';
import PetProfile from './PetProfile';
import TextBox from './TextBox';
import Footer from './Footer';

const Homepage = () => {
  return (
    <div>
      <Header />
      <main>
        <LoginSignUp />
        <PetProfile />
        <TextBox />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
