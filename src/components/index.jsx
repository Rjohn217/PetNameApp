import React from 'react';

const Homepage = () => {
  return (

    console.log("Homepage rendering..."),
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Welcome to NameFurMe!</h1>
        <p>Discover the purrfect name for your pet.</p>
      </header>

      <main className="homepage-main">
        <section className="introduction">
          <h2>How It Works</h2>
          <p>Post a photo of your new pet and let our community suggest the most fitting names.</p>
        </section>
        
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>Real-time name suggestions</li>
            <li>Anonymous contributions</li>
            <li>See top names at a glance</li>
          </ul>
        </section>
      </main>

      <footer className="homepage-footer">
        <p>&copy; 2023 NameFurMe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;
