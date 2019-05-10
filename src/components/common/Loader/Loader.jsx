import React from 'react';
import './Loader.scss';

export default class Loader extends React.Component {

    


    render() {

        const {fadeOut} = this.props;

        return (
            <div className={`Loader container ${fadeOut ? 'container--fadeout' : null }`}>

                <div className="lds-heart loading">
                    <div></div>
                </div>

                <span className="loading__text">Trwa ładowanie strony...</span>
            </div>
        )

    }

}


