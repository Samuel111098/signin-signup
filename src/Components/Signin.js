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
				<Row className='signinintro'>
					<Col>
						<Form>
							<h1>Login</h1>
							<h4>Welcome back! Please login to your account to access the full version.</h4>
							<Form.Group controlId='formGroupEmail'>
								<Form.Control className='username' type='email' placeholder='Username' />
							</Form.Group>
							<Form.Group controlId='formGroupPassword'>
								<Form.Control className='password' type='password' placeholder='Password' />
							</Form.Group>
							<Button className='loginbtn' variant='primary' type='submit'>
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
