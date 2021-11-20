import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router, { withRouter } from 'next/router';
import Axios from 'axios';
import { FaUnderline } from 'react-icons/fa';
const getData = async token => {
	const header = {
		headers: {
			'x-auth-token': token,
		},
	};
	const data = await Axios.get('http://localhost:5000/api/auth', header);

	return data.data;
};

const Navbar2 = ({ router }) => {
	const [islogin, setIsLogin] = useState(false);
	const [name, setName] = useState('');

	useEffect(() => {
		const coo = localStorage.getItem('ship-token');
		if (coo != null && coo != '' && coo != undefined && coo != 'undefined' && coo != 'null') {
			try {
				console.log("islogin");
				setIsLogin(true);
			} catch (error) {
				setIsLogin(false);
			}
		}
	}, []);

	return (
		<nav className='main-nav stick-fixed'>
			<div className='container relative clearfix'>
				<div className='nav-logo-wrap local-scroll'>
					<Link href=''>
						<a
							onClick={() => {
								window.location.href = '/';
							}}
							className='logo'
						>
							<img className='ship-logo' src='images/ship_logo.png' alt='logo' />
							<img className='bbb-logo' src='images/bbb_logo.png' alt='logo' />
						</a>
					</Link>
				</div>
				<div className='mobile-nav'>
					<a href='#' className='fm-button'>
						<span></span>Menu
					</a>

					<div className='fm-wrapper' id='fullscreen-menu'>
						<div className='fm-wrapper-sub'>
							<div className='fm-wrapper-sub-sub'>
								<ul className='fm-menu-links scroll-nav local-scroll'>
									<li className='nav-list home'>
										<Link href=''>
											{
												islogin ? '' 
												:
												<a
													onClick={() => {
														window.location.href = '/';
													}}
												>
													HOME
												</a>
											}
										</Link>
									</li>
									<li className='nav-list dashboard'>
										<Link href='/dashboard'>
											<a
												onClick={() => {
													if(islogin){
														window.location.href = '/dashboard';
													} else {
														window.location.href = '/login';
													}
												}}
											>
												DASHBOARD
											</a>
										</Link>
									</li>
									<li className='nav-list howitworks'>
										<Link href='/howitworks'>
											<a
												onClick={() => {
													window.location.href = '/howitworks';
												}}
											>
												HOW IT WORKS
											</a>
										</Link>
									</li>
									<li className='nav-list pricing'>
										<Link href='/pricing'>
											<a
												onClick={() => {
													window.location.href = '/pricing';
												}}
											>
												PRICING
											</a>
										</Link>
									</li>
									<li className='nav-list support'>
										<Link href='/support'>
											<a
												onClick={() => {
													window.location.href = '/support';
												}}
											>
												SUPPORT
											</a>
										</Link>
									</li>
									{islogin ? (
									<>
										<li>
											<a>
												{localStorage.getItem('ship-username')}
											</a>
										</li>
										<li>
											<a onClick={() => {
												localStorage.setItem('ship-username', '');
												localStorage.setItem('ship-token', '');
												if (router.pathname === '/' || router.pathname === '/index') {
													window.location.reload();
												} else {
													Router.push('/');
												}
											}}>
												Log out
											</a>
										</li>
											</>
										) : (
											<>
										<li>
											<Link href='/login'>
												<a>
													SIGN IN
												</a>
											</Link>
										</li>
										<li>
											<Link href='/register'>
												<a>
													SIGN UP
												</a>
											</Link>
										</li>
									</>
								)}
								</ul>

								<div className='fm-social-links'>
									<a href='#' title='Facebook' target='_blank'>
										<i className='fa fa-facebook'></i>
									</a>
									<a href='#' title='Twitter' target='_blank'>
										<i className='fa fa-twitter'></i>
									</a>
									<a href='#' title='Linkedin' target='_blank'>
										<i className='fa fa-linkedin'></i>
									</a>
									<a href='#' title='Instagram+' target='_blank'>
										<i className='fa fa-instagram'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='inner-nav desktop-nav'>
					<ul className='clearlist scroll-nav local-scroll'>
						<li className='nav-list home'>
							<Link href=''>
								{
									islogin ? '' 
									:
									<a
										onClick={() => {
											window.location.href = '/';
										}}
									>
										HOME
									</a>
								}
							</Link>
						</li>
						<li className="nav-list dashboard">
							<Link href=''>
								<a
									onClick={() => {
										if(islogin){
											window.location.href = '/dashboard';
										} else {
											window.location.href = '/login';
										}
									}}
								>
									DASHBOARD
								</a>
							</Link>
						</li>
						<li className="nav-list howitworks">
							<Link href=''>
								<a
									onClick={() => {
										window.location.href = '/howitworks';
									}}
								>
									HOW IT WORKS
								</a>
							</Link>
						</li>
						<li className="nav-list pricing">
							<Link href=''>
								<a
									onClick={() => {
										window.location.href = '/pricing';
									}}
								>
									PRICING
								</a>
							</Link>
						</li>
						<li className="nav-list support">
							<Link href=''>
								<a
									onClick={() => {
										window.location.href = '/support';
									}}
								>
									SUPPORT
								</a>
							</Link>
						</li>

						{islogin ? (
							<>
								<li>
									<a style={{fontSize: "20px", fontWeight: "bold"}}>
										{localStorage.getItem('ship-username')}
									</a>
								</li>
								<li>
									<a onClick={() => {
										localStorage.setItem('ship-username', '');
										localStorage.setItem('ship-token', '');
										if (router.pathname === '/' || router.pathname === '/index') {
											window.location.reload();
										} else {
											window.location.href = '/';
										}
									}}>
										<span className='btn btn-mod btn-border-w btn-circle sign-in'>
											LOG OUT
										</span>
									</a>
								</li>
							</>
						) : (
							<>
								<li>
									<Link href='/login'>
										<a>
											<span className='btn btn-mod btn-border-w btn-circle sign-in'>
												SIGN IN
											</span>
										</a>
									</Link>
								</li>
								<li>
									<Link href='/register'>
										<a>
											<span className='btn btn-mod btn-border-w btn-circle sign-up'>
												SIGN UP
											</span>
										</a>
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
			<style jsx>
				{`
					.btn {
						background: transparent;
					}
					.nav-list.active a{
						color: red;
					}
				`}
			</style>
		</nav>
	);
};

export default withRouter(Navbar2);
