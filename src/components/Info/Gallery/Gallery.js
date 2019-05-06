import React from 'react';
import "./Gallery.scss";

export default class Gallery extends React.Component {



render(){
    return(
        <article className="Gallery">
            <div className="img img_container">
            <h2 className="img__title">Galeria</h2>

            <section className="img__content">
             <img src="https://via.placeholder.com/209x250" alt="placeholder"  />
            </section>

            </div>        
        
        </article>
    )
}


}