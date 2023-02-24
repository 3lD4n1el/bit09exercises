import React, { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export const Ex01 = () => {
  const [contador, setContador] = useState(0);
  const [color, setColor] = useState(null);

  useEffect(() => {
    if (contador > 0) setColor('info');
    else if (contador < 0) setColor('danger');
    else setColor('warning');
  }, [contador]);

  return (
    <section>
      <h2>
        Contador: <Badge bg={color}>{contador}</Badge>
      </h2>
      <Button variant='outline-dark' onClick={() => setContador(contador - 1)}>
        <i className='bi bi-caret-left'></i>
      </Button>
      <Button variant='outline-dark' onClick={() => setContador(0)}>
        <i className='bi bi-repeat'></i>
      </Button>
      <Button variant='outline-dark' onClick={() => setContador(contador + 1)}>
        <i className='bi bi-caret-right'></i>
      </Button>
    </section>
  );
};
