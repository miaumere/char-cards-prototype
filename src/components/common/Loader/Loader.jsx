import React from 'react';
import './Loader.scss';

export default class Loader extends React.Component {


render(){
    return(
        <div className="Loader">
<div class="lds-heart loading"><div></div></div>
        <span className="loading__text">Trwa ładowanie strony...</span> 
        </div>
    )

}

}


