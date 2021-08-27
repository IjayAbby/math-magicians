import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

const Home = () => { // eslint-disable-line
  return (
    <div
      style={{
        fontSize: '1rem',
        margin: '2rem 0',
      }}
    >
      <h2
        style={{
          margin: '2rem 0',
        }}
      >
        Welcome to our page!
      </h2>
      <LoremIpsum p={2} />
    </div>
  );
};

export default Home;
