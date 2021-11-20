import React, { useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Axios from 'axios';
import country_list from '../../Data/Country_List';
import AlertContext from '../../context/alert/alertContext';
import Router, { useRouter } from 'next/router';
import verifyMail from '../genericFunctions/verifyMail';
import Navbar2 from '../Navbar2';
import Topbar from '../topbar';
import Footer2 from '../Footer2';

const Reg = props => {
	const router = useRouter();
	const context = useContext(AlertContext);
	const [loading, setLoading] = useState(false);
	const [docsList] = useState(['DNI', 'CE', 'Passport']);
	const [check, setCheck] = useState(false);
	const { accType } = props.profile;
	useEffect(() => {
		window.onpopstate = function (event) {
			window.location.href = '/';
		};
	}, []);
	const handleRegister = async e => {
		e.preventDefault();
		if (check) {
			setLoading(true);
			const {
				firstName,
				lastName,
				password,
				passwordConfirm,
				email,
				phone,
			} = props.values;

			const body = { name: firstName+lastName, email: email, password: password, telNum: phone };
			if(password == passwordConfirm) {
				try {
					const res = await Axios.post('http://localhost:5000/users/register', {data: body});
					const token = res.data.token;
					window.location.href = '/login';
					setLoading(false);
				} catch (error) {
					setLoading(false);
					context.setAlert('Register erro');
				}
			}	
			else {
				context.setAlert('Password does not match');
				window.location.href = '/register';
			}
		}
	};

	if (loading === true) {
		return (
			<div className='page-loader'>
				<div className='loader'>Register...</div>
			</div>
		);
	}

	return (
		<section className='page-section appear-animate pt-20 pb-0'>
			<Navbar2 />
			<Topbar />
			<div className='home-content container'>
				<div className='home-text'>
					<div className='container align-center'>
						<form className='form white'>
							<h1 className='section-title'>
								Start Shopping From Canada
							</h1>
							<div className="row">
								<div className="col-md-6">
									<input
										type='text'
										name='firstName'
										id='usuario'
										className='input-sm bold'
										placeholder='first name'
										pattern='.{3,100}'
										value={props.values.firstName}
										onChange={props.handleChange('firstName')}
									/>
								</div>
								<div className="col-md-6">
									<input
										type='text'
										name='lastName'
										id='usuario'
										className='input-sm bold'
										placeholder='last name'
										pattern='.{3,100}'
										value={props.values.lastName}
										onChange={props.handleChange('lastName')}
									/>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<input
										type='password'
										name='password'
										id='contrasena'
										className='input-sm bold'
										placeholder='password'
										pattern='.{3,100}'
										value={props.values.password}
										onChange={props.handleChange('password')}
									/>
								</div>
								<div className="col-md-6">
									<input
										type='password'
										name='password'
										id='contrasena'
										className='input-sm bold'
										placeholder='Confirm'
										pattern='.{3,100}'
										value={props.values.passwordConfirm}
										onChange={props.handleChange('passwordConfirm')}
									/>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<input
										type='tel'
										name='tetefono'
										id='tetefono'
										className='input-sm bold'
										placeholder='phone'
										pattern='.{3,100}'
										value={props.values.phone}
										onChange={props.handleChange('phone')}
									/>
								</div>
								<div className="col-md-6">
									<input
										type='email'
										name='email'
										id='email'
										className='input-sm bold'
										placeholder='Email'
										pattern='.{3,100}'
										value={props.values.email}
										onChange={props.handleChange('email')}
									/>
								</div>
							</div>
							<div>
								<button
									onClick={handleRegister}
								>
									SIGN UP
								</button>
							</div>
							<div>
								<a href='#'>Did you forget password?</a>
								<p className='mt-20'>
									<input
										type='checkbox'
										id='inlineCheckbox1'
										value={check}
										onChange={() => setCheck(!check)}
									/>
									<a href='#'>To register you have to agree</a> {' '}
									<a href='#'>our privacy policy</a>.
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
			<Footer2 />
			<style jsx>{`
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
					margin-bottom: 10px;
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
		</section>
	);
};

export default Reg;
