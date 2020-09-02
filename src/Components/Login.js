import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Signin from './Signin';
import Signup from './Signup';

const Login = () => {
	return (
		<div>
			<Container className='login'>
				<Row className='box'>
					<Col md={6}>
						<Signin />
					</Col>
					<Col md={6}>
						<Signup />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Login;
