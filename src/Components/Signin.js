import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Signin = () => {
	return (
		<div>
			<Container className='signin'>
				<Row>
					<Col>
						<Form>
							<h1>Login</h1>
							<h4>Welcome back! Please login to your account to access the full version.</h4>
							<Form.Group className='username' controlId='formGroupEmail'>
								<Form.Control type='email' placeholder='Username' />
							</Form.Group>
							<Form.Group className='password' controlId='formGroupPassword'>
								<Form.Control type='password' placeholder='Password' />
							</Form.Group>
							<Button variant='primary' type='submit'>
								LOGIN
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Signin;
