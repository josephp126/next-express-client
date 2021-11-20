import React, { useState, useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import UserContext from '../context/UserContext';
import Navbar2 from '../components/Navbar2';
import Topbar from '../components/topbar';
import Footer2 from '../components/Footer2';

const operation = props => {
	const { state, isUserAuth } = useContext(UserContext);

	const [isLogin, setIsLogin] = useState('');

	useEffect(() => {
		if(document.getElementsByClassName('nav-list howitworks').length > 0){
			for(let i=0; i<document.getElementsByClassName('nav-list howitworks').length; i++) {
				document.getElementsByClassName('nav-list howitworks')[i].classList.add("active");
			}
		}
	}, []);

	return (
		<>
			<Layout>
				<div className='appear-animate'>
					<Navbar2 />
					<Topbar />

					<div className="banner">
						<div className="banner-title">
							<h1>SIMPLE. FAST. WORRY-FREE</h1>
						</div>
						<div className="banner-video">
							<div className="video videoWrapper" id="sbmvideo">
								<iframe id="player1" title="YouTube video player" src="video/ShipByMail_04.mp4" className="__web-inspector-hide-shortcut__ how_work">

								</iframe>
							</div>
						</div>
					</div>
					<div className="description">
						<div className="container">
							<div className="row">
								<div className="col-md-9">
									<h1>HOW IT WORKS?</h1>
									<p>
										Irrespective of whether you need to ship a parcel from Canada to the USA
										or to the world, ShipByMail's mission<br></br>
										is to provide the cheapest, fastest and easiest way to send a parcel from Canada.
										Cut and paste the URL of the <br></br>
										product you wish to purchase and we'll normally give a quote within 90seconds to
										show you that shipping<br></br>
										goods from Canada through us is affordable!
									</p>
									<p>We start by giving a unique and <b>Free Canadian address</b> to our customers.</p>
									<p>
										There are two scenarios which global shoppers are faced with, one when the retailer
										doesn't offer cheap (if any)<br></br>
										shipping services from Canada and the other when the retailer doesn't accept non-Canadian
										credit cards.<br></br>
									</p>
									<p>
										In the first instance, shoppers simply make the purchases themselves using their own
										credit cards and forward<br></br>
										their purchases to their free ShipByMail Canadian address.
									</p>
									<p>
										In the second instance whereby merchants do not accept non-Canadian modes of payment, 
										shoppers would <br></br>
										use our BuyForMe service. Cut and paste the URL of the product you wish to purchase, 
										specify the speed in<br></br>
										which you'd like to ship from the Canadian merchant, make payment for the product cost and
										then sit back<br></br>
										while we place the order on your behalf usually within 48 hours.
									</p>
									<p>
										You will receive email from us within 1 business day to let you know once your parcel arrives 
										at your free<br></br>
										Canadian Address in our warehouse. It takes us several hours for us to match incoming parcels to their<br></br>
										respective shoppers, to inspect the items for any damage that might have occurred during domestic parcel<br></br>
										delivery and lastly to take photos and weigh and DIM the packages.
									</p>
									<p>Click on the link in the email notification and then choose the following options:</p>
									<p>1. View photos of your parcels (instantaneous)</p>
									<p>2. Store and Consolidate (we give you 30 days free storage)</p>
									<p>3. Forward your parcel</p>
									<p>
										Once you are ready to use our parcel forwarding service, you will be prompted to make payment using your<br></br>
										credit card and then sit back and wait for your parcel to arrive. It usually takes around 3-7 business days for<br></br>
										your parcel to arrive, barring any delays from your local customs office which is not within our control.
									</p>
								</div>
								<div className="col-md-3 description-images">
									<div>
										<img src="images/ebay.png" />
									</div>
									<div>
										<h5>Goods from Various stores</h5>
									</div>
									<div>
										<img src="images/arrow_vertical.png" />
									</div>
									<div>
										<img src="images/description_box.png" />
									</div>
									<div>
										<h5>Consolidate into one box</h5>
									</div>
									<div>
										<img src="images/arrow_vertical.png" />
									</div>
									<div>
										<img src="images/description_last.png" />
									</div>
									<div>
										<h5>Save 50% - 70% on shipping</h5>
									</div>
								</div>
							</div>
							<div className="description-end">
								<p>
									ShipByMail members save on an average CND$400/year in shipping costs
								</p>
							</div>
						</div>
					</div>

					<Footer2 />
					<style jsx>{`
						div,
						section {
							background: white;
						}
						.banner-title h1 {
							color: black;
							text-align: center;
							margin-top: 0;
						}
						.banner-video #player1{
							width: 100%;
							height: 600px;
						}
						.description h1{
							color: #1e487c;
							margin-bottom: 20px;
							font-family: 'Raleway', sans-serif;
						}
						.description-images {
							padding-top: 20px;
							text-align: center;
						}
						.description-images h5 {
							font-size: 18px;
							font-weight: 700;
						}
						.description-end p {
							font-size: 22px;
							text-align: center;
							font-weight:bold;
							color: white;
							margin-bottom: 0;
						}
						.description-end {
							padding: 5px 0px 7px 0px;
							background-color: #183456;
							margin-bottom: 30px;
						}
					`}</style>
				</div>
			</Layout>
		</>
	);
};

export default operation;
