import React from 'react';
import "./Gallery.scss";

export default class Gallery extends React.Component {



render(){
    return(
        <article className="Gallery img">
            <div className="img__container">
            <h2 className="img__title">Galeria</h2>

            <section className="img__content">
             <img className="photo" src="https://via.placeholder.com/2090x2590" alt="placeholder"  />
             <button className="photo__desc">Nazwa obrazka</button>
            </section>

            </div>        
        
        </article>
    )
}


}