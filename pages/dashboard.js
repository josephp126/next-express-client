import React, {useState, useContext, useEffect} from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar-dark';
import UserContext from '../context/UserContext';
import Navbar2 from '../components/Navbar2';
import Topbar from '../components/topbar';
import Footer2 from '../components/Footer2';
import axios from 'axios';
import Link from 'next/link';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import e from 'cors';

const Dashboard = (props) => {
	const { state, isUserAuth } = useContext(UserContext);
	const [isLogin, setIsLogin] = useState('');
	const {addToast} = useToasts();
	const [buyForUrl, setBuyForUrl] = useState('');
	const [trackingNumber, setTrackingNumber] = useState('');

	const [image, setImage] = useState(null);
	const [createObjectURL, setCreateObjectURL] = useState(null);

	const uploadToClient = (event) => {
		event.preventDefault();
		event.persist();
		if (event.target.files && event.target.files[0]) {
			console.log(event.target.files[0]);
			const i = event.target.files[0];
			setImage(i);
			setCreateObjectURL(URL.createObjectURL(i));
		}
	};

	const uploadToServer = async (event) => {
		event.preventDefault();
		event.persist();
		const body = new FormData();
		body.append('file', image);
		body.append('trackNum', trackingNumber);
		body.append('userId', localStorage.getItem("ship-userId"));
		console.log(image);
		await
		axios
		.post('http://localhost:5000/users/uploadfile', body)
		.then((response) => {
			console.log(response);
			if(response.data == 'success'){
				addToast('successfully saved', {appearance: 'success'});
			} else {
				addToast('save failed', {appearance: 'error'});
			}
		});
	};

	const _viewInvoice = (e) => {
		window.location.href = '/viewinvoices';
	}
	
	useEffect(() => {
		if(document.getElementsByClassName('nav-list dashboard').length > 0){
			for(let i=0; i<document.getElementsByClassName('nav-list dashboard').length; i++) {
				document.getElementsByClassName('nav-list dashboard')[i].classList.add("active");
			}
		}
	}, []);

	const _handleChangeBuyForUrl = (e) => {
		e.preventDefault();
		e.persist();
		setBuyForUrl(e.target.value);
	}

	const _handleTrackingNumber = (e) => {
		e.preventDefault();
		e.persist();
		setTrackingNumber(e.target.value);
	}
	
	const _checkBuyForMe = async (e) => {
		e.preventDefault();
		e.persist();
		await
		axios
		.post('/', {data: buyForUrl})
		.then((response) => {
			console.log(response);
			if(response.data.error == 0){
				
			} else {
				
			}
		});
	}

	const _shipNow = async (e) => {
		e.preventDefault();
		e.persist();
		await
		axios
		.get('https://www.facebook.com/tr', {
			params:{
				id: 255,
			}
		})
		.then((response) => {
			console.log(response);
			if(response.data.error == 0){
				
			} else {
				
			}
		});
	}

	const _track = async (e) => {
		e.preventDefault();
		e.persist();
		await
		axios
		.get('https://www.facebook.com/tr', {
			params:{
				id: 255,
			}
		})
		.then((response) => {
			console.log(response);
			if(response.data.error == 0){
				
			} else {
				
			}
		});
	}

	return (
		<>
			<Layout>
				<div className='appear-animate'>
					<Navbar2 />
					<Topbar />
					<div className="container">
						<div className="banner">
							<div className="row">
								<div className="col-md-4 buyfor">
									<h5>BuyForMe</h5>
									<p>(Assisted Purchase)</p>
									<p className="warn"><span className="zero">0 </span>Items in your BFM Cart</p>
									<p>Enjoy Tax-Free Shopping!</p>
									<input type="text" className="form-control" value={buyForUrl} onChange={(e) => _handleChangeBuyForUrl(e)} placeholder="Enter Product URL" />
									<p>You have placed <span className="zero">0</span> BuyForMe order</p>
									<button className="check-btn" onClick={(e) => _checkBuyForMe(e)}>
										Check the status of your BuyForMeOrder
									</button>
								</div>
								<div className="col-md-4 shipyour">
									<h5>Ship Your Parcels</h5>
									<p>No, of packages at your Canadian Address <span className="zero">0</span></p>
									<p>
										Please give us 1-2 business days to inspects,<br></br>
										weight, repack, photograph and assign your<br></br>
										parcel to your suite.
									</p>
									<div className="ship-now">
										<button onClick={(e) => _shipNow(e)}>Ship Now</button>
									</div>
								</div>
								<div className="col-md-4 description">
									<p className="warn">
										When merchants ACCEPT your mode of payment
									</p>
									<p>
										1. Place your order directly with the merchant<br></br>
										2. Pay using your credit card<br></br>
										3. Ship it to you Canadian Address shown in your<br></br>
										&nbsp;&nbsp;Account Page (Click on your name on the top-<br></br>
										&nbsp;&nbsp;right hand corner of this page)<br></br>
										4. We will email you once your parcel arrives
									</p>
								</div>
							</div>
							<div className="row">
								<div className="col-md-4 uploadpurchase">
									<h5>Upload Purchase Invoices</h5>
									<p>[to avoid any potential delays]</p>
									<input type="number" placeholder="Tracking Number" className="form-control" value={trackingNumber} onChange={(e) => _handleTrackingNumber(e)} />
									<form onSubmit= {(e) => uploadToServer(e)}>
										<div className="add-invoice">
											<div>
												<label for="files" className="btn">Add Invoice</label>
												<input type="file" onChange={(e) => uploadToClient(e)} />
											</div>
										</div>
										<div className="save">
											<button type="submit">
												Save
											</button>
										</div>
									</form>
									<div className="view-upload">
										<button onClick={(e) => _viewInvoice(e)}>
											View Uploaded Invoices
										</button>
									</div>
								</div>
								<div className="col-md-4 trackyour">
									<h5>Track your international Parcels</h5>
									<p>keep track of shipments en-route to your home address</p>
									<div className="track">
										<button onClick={(e) => _track(e)}>Track</button>
									</div>
								</div>
								<div className="col-md-4 description">
									<p className="warn">
										When merchants REJECT your mode of payment
									</p>
									<p>
										1. Use BuyForMe Service(Save on 5% GST and<br></br>
										&nbsp;&nbsp;7% PST)
										1. Enter the URL of the product you wish to<br></br>
										&nbsp;&nbsp;purchase
										3. Complete the forms and make payment<br></br>
										4. We will place the order on your behalf within<br></br>
										&nbsp;&nbsp;1 day and email you a confirmation
									</p>
								</div>
							</div>
							<div>
								<p className="refer">Refer a Friend</p>
								<p>
									Receive CAD $5.00 Shipping Bucks for each friend that creates and account 
									on ShipByMail.com and completes their first shipment.
								</p>
							</div>
							<div className="row social-icon">
								<a href=""><img src="images/facebook.png" /></a>
								<a href=""><img src="images/twitter.png" /></a>
								<a href=""><img src="images/email.png" /></a>
								<a href=""><img src="images/sharethis.png" /></a>
							</div>
						</div>
					</div>
					<Footer2 />
				</div>
				<style jsx>{`
					div,
					section {
						background: white;
					}
					.banner {
						padding-top: 60px;
						padding-bottom: 50px;
					}
					.banner .col-md-4 {
						padding: 6px 12px;
						margin-top: 15px;
						border: 1px solid #a19797;
						margin-right: 15px;
					}
					.row {
						display: flex;
					}
					.add-invoice label {
						background-color: #1e487c;
						color: white;
						position: absolute;
						cursor: pointer;
					}
					.add-invoice input[type="file"] {
						opacity: 0;
						height: 35px;
						cursor: pointer;
					}
					.banner .buyfor,
					.banner .shipyour,
					.banner .trackyour,
					.banner .uploadpurchase {
						border-top: 3px solid #1e487c;
					}
					
					.banner h5 {
						margin: 8px 0px;
						color: #1e487c;
						font-size: 18px;
					}
					.banner p {
						font-size: 14px;
						color: #1e487c;
						margin: 5px 0px;
					}
					.banner input {
						font-size: 14px;
					}
					.view-upload {
						text-align : right;
					}
					.zero {
						color: red;
					}
					.warn {
						color: black;
					}
					.banner button {
						border: none;
						border-radius: 2px;
						color: white;
						background-color: #1e487c;
						padding: 4px 10px;
					}
					.ship-now {
						text-align: center;
					}
					.ship-now button {
						margin-top: 15px;
					}
					.add-invoice {
						margin-bottom: 15px;
						margin-top: 5px;
					}
					.track {
						margin-top: 15px;
						text-align: center;
					}
					.refer {
						font-size: 20px;
					}
					.social-icon a {
						margin-right: 10px;
					}
					.social-icon {
						padding-left: 12px;
					}
				`}</style>
			</Layout>
		</>
	);
};

const dashboardApp = props => (
	<ToastProvider>
	  <Dashboard />
	</ToastProvider>
);

export default dashboardApp;
