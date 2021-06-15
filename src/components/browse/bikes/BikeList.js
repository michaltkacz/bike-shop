import React, { useState, useEffect } from 'react';

import { Container, Row, Col, Alert } from 'react-bootstrap';

import { database } from '../../../firebase/firebase';

import Bike from './Bike';

const BikeList = () => {
  const [bikes, setBikes] = useState([]);

  const getData = () => {
    const bikesRef = database.ref('bikes');
    bikesRef.on('value', (snapshot) => {
      const bikes = snapshot.val();
      const newBikes = [];
      for (let id in bikes) {
        newBikes.push({ id, ...bikes[id] });
      }
      const groupedBikes = [];
      let i = 0;
      while (i < newBikes.length) {
        const b1 = newBikes[i];
        const b2 = newBikes[i + 1];
        if (b2) {
          groupedBikes.push([b1, b2]);
        } else {
          groupedBikes.push([b1]);
        }
        i += 2;
      }
      setBikes(groupedBikes);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container fluid className='mb-3'>
      {bikes.length === 0 ? (
        <Alert variant='primary' className='rounded-0 my-3 text-center'>
          Currently no bikes available
        </Alert>
      ) : (
        bikes.map((bikeGroup, index) => {
          return (
            <Row key={`bike-group-${index}`}>
              {bikeGroup.map((bike) => {
                return (
                  <Col key={bike.id} xl={6} className='mt-3 px-0 px-md-3'>
                    <Bike data={bike} />
                  </Col>
                );
              })}
            </Row>
          );
        })
      )}
    </Container>
  );
};

export default BikeList;
