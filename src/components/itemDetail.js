import React, {useState, useEffect} from 'react';


function ItemDetail({ match }) {

	useEffect(() => {
		fetchItem();
		console.log(match);
		
	},[]);

	const [item, setItem] = useState({});

	const fetchItem = async () => {
		const fetchItem = await fetch('https://fortnite-api.theapinetwork.com/br_motd/get');
		const item = await fetchItem.json();
		setItem(item);
		console.log(item); 
	}

    return(
      <div className="container">
      	<h1>Item</h1>
      	<h2>{item.name}</h2>
      </div>
    );
}

export default ItemDetail;