import React from 'react';
import './home.css';

function Home() {
  return (
    <div>
      <div className='home-page'id='home'>
        <div className='image-1'>
          <img src="madhan.png" alt="" />
          <div className='content'>
            <h3>Hello I'm</h3>
            <h1>MADHAN P</h1>
            <h2>FullStack Developer</h2>
          <a href="#contact">
  <button>HIRE ME</button>
</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
