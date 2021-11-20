import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router, { withRouter } from 'next/router';
import Axios from 'axios';
import Cookies from 'js-cookie';

const Navbar = ({ router }) => {

	useEffect(() => {
	}, []);

	const handleLogout = () => {
		const res = Cookies.remove('token');
		if (router.pathname === '/' || router.pathname === '/index') {
			window.location.reload();
		} else {
			Router.push('/');
		}
	};

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
									<li className='nav-list dashboard'>
										<Link href='/dashboard'>
											<a
												onClick={() => {
													window.location.href = '/dashboard';
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
									<li>
										<Link href='/UserInfo'>
											<a>{localStorage.getItem("ship-userName")}</a>
										</Link>
									</li>
									<li>
										<Link href='/register'>
											<a>Logout</a>
										</Link>
									</li>
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
						<li className="nav-list dashboard">
							<Link href=''>
								<a
									onClick={() => {
										window.location.href = '/dashboard';
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
									<Link href='/login'>
										<a>
											<button onClick={handleLogout} className='btn'>
												<span className='btn btn-mod btn-border-w btn-circle bold btn-sesion'>
													Cerrar Sesión
												</span>
											</button>
										</a>
									</Link>
								</li>
								<li>
									<Link href=''>
										<a
											onClick={() => {
												window.location.href = '/profile';
											}}
										>
											<span className='btn btn-mod btn-color btn-border-w btn-medium btn-circle bold'>
												{name}
											</span>
										</a>
									</Link>
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

export default withRouter(Navbar);
