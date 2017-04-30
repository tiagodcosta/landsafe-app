import React from 'react'
import Autocomplete from 'react-google-autocomplete'
 

export const SearchBox = () =>
		<div className="search-container">
			<Autocomplete placeholder={'Enter a city'} className="search-field"
			    style={{width: '100%'}}
			    onPlaceSelected={(place) => {			      
			    	console.log(place);
			    }}
			    types={['(regions)']}
			    componentRestrictions={{country: "US"}}
			/>
		</div>