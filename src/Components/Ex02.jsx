import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

export const Ex02 = () => {
  const [pato, setPato] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getDuck = async () => {
    try {
      setLoading(true)
      const res = await fetch('https://random-d.uk/api/v2/random')
      setPato(await res.json())
    } catch (error) {
      setError(true)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 4000);
    }
  }

  return <section>
    <h2>¿Quieres ver un pato? 🦆</h2>
    {error
      ? <Alert variant="warning"><p>Ups no hay patos hoy 😔</p></Alert>
      : loading
      ? <Spinner animation="border" variant="info" />
      : pato && <Image src={pato.url} alt='Duck' />
    }
    <Button variant="outline-info" onClick={getDuck} className="d-block mx-auto mb-5">Ver 🦆</Button>
  </section>;
};