import React, { useRef, useState } from 'react';

import { Form, Button, Card, Alert } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      history.push('/');
    } catch {
      setError('Failed to sign in');
      setLoading(false);
    }
  };

  return (
    <Card border='primary' className='rounded-0'>
      <Card.Body>
        <h2 className='mb-4'>Already a member - Sign In</h2>
        <Alert show={error} variant='danger'>
          {error}
        </Alert>
        <Form onSubmit={handleSubmit}>
          <Form.Group id='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' ref={emailRef} required />
          </Form.Group>
          <Form.Group id='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              minLength={6}
              ref={passwordRef}
              required
            />
          </Form.Group>

          <Button
            disabled={loading || currentUser}
            className='w-100 rounded-0'
            type='submit'
          >
            Sign In
          </Button>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Button variant='link text-info shadow-0'>Forgot password?</Button>
      </Card.Footer>
    </Card>
  );
};

export default Login;
