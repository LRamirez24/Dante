import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Shop(props) {

	useEffect(() => {
		fetchItems();
	},[]);

	const [items, setItems] = useState([]);

	const fetchItems = async () => {
		const data2 = await fetch('https://fortnite-api.theapinetwork.com/store/get');
		const items = await data2.json();
		console.log(items.data);
		setItems(items.data);
	}

	const item1 =  items.map(item => (
        	<h1 key={item.itemId}>
        	<Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
        	<img  src={item.item.images.icon} alt="" />
        	</h1>

        ));
        	const itemDescription =  items.map(item => (
        	<img key={item.itemId} src={item.item.images.icon} alt="" />
        ));


    return(
      <div className="container">
      <div className="row">
      <div className="col-12 col-md-5 m-1">
      {item1} 
      </div>
      </div>
      </div>
    );
}

export default Shop;