import React from 'react';
import './Error.scss';
import { Link } from 'react-router-dom';

export default class Error extends React.Component {

    state = {}

    render() {

        const { errorMsg = "Błąd" } = this.props;

        return (
            <div className="Error">

                <div className="error-modal">
                    <div className="error-modal__container">

                        <h2 className="error-modal__title">WYSTĄPIŁ BŁĄD SERWERA</h2>
                        <div className="error-modal__message">

                            <div className="error-modal__message-content">

                                {errorMsg}

                            </div>

                            <div className="error-modal__buttons-container">
                                <Link to="/"><button>Powrót</button></Link>
                            </div>


                        </div>
                    </div>

                </div>

            </div>
        )
    }
}