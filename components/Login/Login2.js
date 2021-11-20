import React, { useContext, useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AlertContext from '../../context/alert/alertContext';
import Navbar2 from '../Navbar2';
import Topbar from '../topbar';
import Footer2 from '../Footer2';
import Router, { withRouter } from 'next/router';
import Axios from 'axios';
import Link from 'next/link';
import Loader from '../Loader';

export const Login = ({router}) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const alertContext = useContext(AlertContext);
	const { setAlert, alerts } = alertContext;
	const [showPassword, setShowPassword] = useState(false);

	const _onSubmit = async (e) => {
		e.preventDefault();
		e.persist();
		const body = { email: username, password: password };
		if (body.email === '' || body.password === '') {
			setAlert('Login error');
		} else {
			const res = await Axios.post('http://localhost:5000/users/login', {data: body});
			if(res.data != "invalid user") {
				console.log(res);
				localStorage.setItem("ship-token", res.data.token);
				localStorage.setItem("ship-username", res.data.name);
				localStorage.setItem("ship-userId", res.data.id);
				if (router.pathname === '/' || router.pathname === '/index') {
					window.location.reload();
				} else {
					Router.push('/');
				}
			} else {
				setAlert("Invalid User");
			}
		}
	};

	const togglePassword = (e) => {
		e.preventDefault();
		setShowPassword(!showPassword);
	};

	const _handleUserNameChange = (e) => {
		e.preventDefault();
		e.persist();
		setUsername(e.target.value);
	}

	const _handlePasswordChange = (e) => {
		e.preventDefault();
		e.persist();
		setPassword(e.target.value);
	}

	return (
		<>
			<section className='page-section pt-20 pb-0 appear-animate' id='page'>
				<Navbar2 />
				<Topbar />
				<div className='home-content container'>
					<div className='home-text'>
						<div className='container align-center'>
							<div className='row'>
								<div className='col-sm-7 col-sm-push-3'>
									<form className='form white' onSubmit={(e) => _onSubmit(e)}>
										<h1>Sign in to enjoy Shopping from Canada</h1>
										<input
											type='email'
											name='usuario'
											id='usuario'
											className='input-sm bold'
											placeholder='email'
											pattern='.{3,100}'
											value={username}
											onChange={(e) => _handleUserNameChange(e)}
										/>
										<i className='fa fa-user fa-2x campoform'></i>
										<input
											name='password'
											id='password'
											className='input-sm bold'
											placeholder='password'
											pattern='.{3,100}'
											type={showPassword ? 'text' : 'password'}
											value={password}
											onChange={(e) => _handlePasswordChange(e)}
										/>

										<i
											className='fa fa-eye fa-2x campoform'
											onClick={(e) => togglePassword(e)}
										/>
										<div>
											<button type="submit">
												SIGN IN
											</button>
										</div>
										
										<a href='/forgetpassword'><p style={{marginBottom: '3px', fontWeight: "normal"}}>Forget password?</p></a>
										<p style={{marginBottom: '3px', color: "black"}}> Don't have an account? &nbsp;&nbsp;
											<a href='/register'> 
												Sign Up Now
											</a>
										</p>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<style jsx>{`
					.btn-icon {
						background: transparent;
						color: white;
					}
					.home-content {
						padding: 80px 0px 60px 0px;
						background: url("images/pay-bg.jpg");
						background-size: cover;
					}
					form {
						background-color: white;
						padding: 15px;
						text-align: center;
					}
					form h1 {
						font-size: 24px;
						color: #1e487c;
						font-weight: 600;
					}
					form input {
						border: 1px solid #f7f1f1 !important;
						color: black !important;
						border-radius: 3px !important;
					}
					form button {
						padding: 8px 25px;
						border:none;
						border-radius: 3px;
						background-color: #1e487c;
						margin-bottom: 30px;
					}
					form a {
						color: black !important;
					}
				`}</style>
				<Footer2 />
			</section>
		</>
	);
};

export default withRouter(Login);
