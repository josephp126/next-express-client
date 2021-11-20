import React, { useState, useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import UserContext from '../context/UserContext';
import Navbar2 from '../components/Navbar2';
import Topbar from '../components/topbar';
import Footer2 from '../components/Footer2';
import DataTable, { createTheme } from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import axios from "axios";

createTheme('solarized', {
	text: {
	  primary: 'white',
	  secondary: 'white',
	},
	background: {
	  default: '#223',
	},
	divider: {
	  default: '#79f',
	},
});

const columns = [
    {
      name: "Tracking Number",
      selector: row => row.trackingNum,
      sortable: true,
    },
    {
      name: "Name",
      selector: row => row.filename,
    },
    {
      name: "Suite ID",
      selector: row => row.suiteId,
      //sortable: true,
      //right: true
    },
    {
      name: "Action",
      selector: row => row.action > 0 ? 'active' : 'non active',
      //right: true
    }
];
  
const darkTheme = {
    title: {
		fontSize: '22px',
		fontColor: '#FFFFFF',
		backgroundColor: '#363640',
    },
    contextMenu: {
		backgroundColor: '#E91E63',
		fontColor: '#FFFFFF',
    },
    header: {
		fontSize: '12px',
		fontColor: '#FFFFFF',
		backgroundColor: '#363640',
    },
    rows: {
		fontColor: '#FFFFFF',
		backgroundColor: '#363640',
		borderColor: 'rgba(255, 255, 255, .12)',
		hoverFontColor: 'black',
		hoverBackgroundColor: 'rgba(0, 0, 0, .24)',
    },
    cells: {
      	cellPadding: '10px',
    },
};

const customStyles = {
    headCells: {
      style: {
        background: 'white',
        fontSize: '16px',
        color: 'black',
		border: '1px solid #a19797'
      },
    },
    cells: {
      style: {
        color: 'black',
        background: 'white',
		border: 'none'
      },
    },
    pagination: {
      style: {
        color: 'black',
		background: 'white',
      }
    },
};
  
function Table() {
	let [totalSupplyData, setTotalSupplyData] = useState([]);

	useEffect(async() => {
		await
		axios
		.get('http://localhost:5000/users/getinvoices', {id: localStorage.getItem("ship-userId")})
		.then((response) => {
			console.log(response);
			if(response.data != 'error'){
				setTotalSupplyData( response.data );
				console.log(totalSupplyData);
			} else {
				console.log("error");
			}
		});
	}, []);

	return (
		<Card>
			<DataTable
				columns = {columns}
				data = {totalSupplyData}
				defaultSortFieldId = {1}
				sortIcon = {<SortIcon />}
				pagination
				theme = "solarized"
				customStyles = { customStyles }
			/>
		</Card>
	);
}


const invoice = props => {
	const { state, isUserAuth } = useContext(UserContext);

	const [isLogin, setIsLogin] = useState('');
	
	useEffect(() => {
		if(document.getElementsByClassName('nav-list dashboard').length > 0){
			for(let i=0; i<document.getElementsByClassName('nav-list dashboard').length; i++) {
				document.getElementsByClassName('nav-list dashboard')[i].classList.add("active");
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
						<div className="container">
							<h1>Uploaded Invoices</h1>
							<Table />
						</div>
					</div>
					<Footer2 />
					<style jsx>{`
						div,
						section {
							background: white;
						}
						.banner {
							padding-top: 100px;
							padding-bottom: 50px;
							text-align: center;
						}
						.banner h1 {
							font-size: 28px;
							color: #1e487c;
							margin-bottom: 20px;
						}
						tr {
							border: none !important;
						}
						td {
							border: 1px solid #a19797 !important;
						}
					`}</style>
				</div>
			</Layout>
		</>
	);
};

export default invoice;
