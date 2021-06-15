import React from 'react';
import { Button } from 'react-bootstrap';
import { database } from '../firebase/firebase';
import bikes from '../firebase/databaseDraft';

const DatabaseAdmin = () => {
  const pushData = () => {
    console.log(bikes);
    const bikesRef = database.ref('bikes');
    for (const bike of bikes) {
      console.log(bike);
      bikesRef.push(bike);
    }
  };

  const getData = () => {
    const bikesRef = database.ref('bikes');
    bikesRef.on('value', (snapshot) => {
      const bikes = snapshot.val();
      const newBikes = [];
      for (let id in bikes) {
        newBikes.push({ id, ...bikes[id] });
      }
      console.log(newBikes);
    });
  };

  return (
    <>
      <Button
        variant='link'
        size='sm'
        className='text-muted'
        onClick={() => pushData()}
      >
        (Debug) DB_push_log
      </Button>
      <Button
        variant='link'
        size='sm'
        className='text-muted'
        onClick={() => getData()}
      >
        (Debug) DB_get_log
      </Button>
    </>
  );
};

export default DatabaseAdmin;
