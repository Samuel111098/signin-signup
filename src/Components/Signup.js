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
						<h4>Create an account to access the full version of with all the features.</h4>
					</Col>
				</Row>
				<Form>
					<Row className='box1'>
						<Col className='icon' md={4}>
							<i className='fa fa-calendar' />
						</Col>
						<Col md={8}>
							<p>What is your date of birth?</p>
							<Form.Group controlId='formdob'>
								<Form.Control className='field' type='text' placeholder='DD / MM / YY' />
							</Form.Group>
						</Col>
					</Row>
					<Row className='box1'>
						<Col className='icon' md={4}>
							<i className='fa fa-suitcase' />
						</Col>
						<Col md={8}>
							<p>What is your occupation?</p>
							<Form.Group controlId='formocc'>
								<Form.Control className='field' type='text' placeholder='Enter your occupation' />
							</Form.Group>
						</Col>
					</Row>
					<Row className='box1'>
						<Col className='icon' md={4}>
							<i className='fa fa-id-card' />
						</Col>
						<Col md={8}>
							<p>What is your social security number?</p>
							<Form.Group controlId='formscn'>
								<Form.Control className='field' type='text' placeholder='xxx-xxx-xxx' />
							</Form.Group>
						</Col>
					</Row>
					<Row className='box1'>
						<Col className='icon' md={4}>
							<i class='fa fa-address-book' />
						</Col>
						<Col md={8}>
							<p>What is your income tax number?</p>
							<Form.Group controlId='formictn'>
								<Form.Control className='field' type='text' placeholder='Enter your tax number' />
							</Form.Group>
						</Col>
					</Row>
					<Button className='signupbtn' variant='primary' type='submit'>
						NEXT
					</Button>
				</Form>
			</Container>
		</div>
	);
};

export default Signup;
