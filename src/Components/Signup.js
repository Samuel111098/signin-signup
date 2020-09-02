import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Signup = () => {
	return (
		<div>
			<Container className='signup'>
				<Row className='signupintro'>
					<Col>
						<h1>Sign Up</h1>
						<h3>Create an account to access the full version of with all the features.</h3>
					</Col>
				</Row>
				<Form>
					<Row>
						<Col md={4} />
						<Col md={8}>
							<h2>What is your date of birth?</h2>
							<Form.Group controlId='formdob'>
								<Form.Control type='text' placeholder='DD / MM / YY' />
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col md={4} />
						<Col md={8}>
							<h2>What is your occupation?</h2>
							<Form.Group controlId='formocc'>
								<Form.Control type='text' placeholder='Enter your occupation' />
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col md={4} />
						<Col md={8}>
							<h2>What is your social security number?</h2>
							<Form.Group controlId='formscn'>
								<Form.Control type='text' placeholder='xxx-xxx-xxx' />
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col md={4} />
						<Col md={8}>
							<h2>What is your income tax number?</h2>
							<Form.Group controlId='formictn'>
								<Form.Control type='text' placeholder='Enter your tax number' />
							</Form.Group>
						</Col>
					</Row>
					<Button variant='primary' type='submit'>
						NEXT
					</Button>
				</Form>
			</Container>
		</div>
	);
};

export default Signup;
