import { useEffect } from 'react';

const Hello = () => {
  useEffect(() => {
    console.log('hi :)');
    return () => console.log('bye :(');
  }, []);
  return <h1>Hello</h1>;
};

export default Hello;
