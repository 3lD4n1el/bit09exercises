import React from 'react';
import Figure from 'react-bootstrap/Figure';

export const HomePage = () => {
  return (
    <section className='d-flex flex-column justify-center'>
      <h1 className='text-center'>Bienvenidos</h1>
      <Figure className='text-center'>
        <Figure.Image
          roundedCircle
          width={171}
          height={180}
          alt='Daniel Romero'
          src= 'https://3ld4n1el.github.io/bit07me/img/me.jpg'
        />
        <Figure.Caption></Figure.Caption>
      </Figure>
    </section>
  );
};
