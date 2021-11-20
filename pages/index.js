import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Cookies from 'js-cookie';
import Axios from 'axios';
import Banner2 from '../components/Banner2';
import Function from '../components/Function';
import Data from '../components/Data';
import CreateAlert from '../components/CreateAlert';
import NewsLetter from '../components/NewsLetter';
import Footer2 from '../components/Footer2';
import Navbar2 from '../components/Navbar2';
import Topbar from '../components/topbar';
const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wowjs') : null;

const Index = props => {
	const coo = Cookies.get('token');
	useEffect(() => {
		if(document.getElementsByClassName('nav-list home').length > 0){
			for(let i=0; i<document.getElementsByClassName('nav-list home').length; i++) {
				document.getElementsByClassName('nav-list home')[i].classList.add("active");
			}
		}
	}, []);

	return (
		<Layout>
			<div className='appear-animate'>
				<div className='page' id='top'></div>
				<Navbar2 />
				<Topbar />
				<Home data={props} />
				<Banner2 />
				<Function />
				<Data />
				<Footer2 />
			</div>
		</Layout>
	);
};

Index.getInitialProps = async function () {
	// const res = await Fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
	// const res2 = await Fetch(
	// 	'https://api.moni.pe/api/exchange/calculate?originCurrency=USD&destinationCurrency=PEN&amount=1'
	// );
	// const res3 = await Fetch(
	// 	'https://api.moni.pe/api/exchange/calculate?originCurrency=PEN&destinationCurrency=USD&amount=1'
	// );
	// // const res2 = { USD_PEN: "3.133" };
	// //testing
	// const data = await res.json();
	// // const data2 = await res2.json();
	// const data2 = await res2.json();
	// const data3 = await res3.json();
	// return {
	// 	soles: data2.rate,
	// 	usd: data3.rate,
	// 	savingsCompra: data2.ahorros,
	// 	savingsVenta: data3.ahorros,
	// 	bpi: data.bpi,
	// };
	return 'add';
};

export default Index;
