import React from 'react';
import Header from './Header';
import LoginSignUp from './LoginSignUp';
import PetProfile from './PetProfile';
import TextBox from './TextBox';

const Homepage = () => {
  return (
    <div>
      <Header />
      <main>
        <LoginSignUp />
        <PetProfile />
        <TextBox />
      </main>
      <footer>
        <p>&copy; 2023 NameFurMe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
