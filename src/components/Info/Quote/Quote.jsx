import React from 'react';

import rollRandomNumber from '../../common/roll-random-number';

import './Quote.scss';

export default class Quote extends React.Component {
   
    render() {
        let output = rollRandomNumber(0, this.props.q.length - 1)

        return (

            <div className="Quote quotation">
                <h2 className="quotation__title">Cytat:</h2>
                <div className="quotation__container">

                <q className="quotation__text"> {this.props.q[output].quote}</q>
                <span className="quotation__context"> {this.props.q[output].context ? "~ " + this.props.q[output].context : null } </span>

                </div>
            </div>
        )
    }


}
