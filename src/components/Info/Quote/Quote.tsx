import React from 'react';

import rollRandomNumber from '../../common/roll-random-number';
import EmptyInfo from '../../common/Empty-info/Empty-info';

import './Quote.scss';

interface Quotation {
    quote: string;
    context?: string;
}

interface IQuoteProps {
    q: Array<Quotation>;

}

interface IQuoteState {

}

export default class Quote extends React.Component<IQuoteProps, IQuoteState> {

    showQuotation() {
        const { q } = this.props;
        let output = rollRandomNumber(0, q.length - 1)

        return(
        <>
            <q className="quotation__text"> {q[output].quote}</q>
            <span className="quotation__context"> {q[output].context ? "~ " + q[output].context : null} </span>

        </>
        )

    }

    render() {
        const { q } = this.props;

        return (

            <div className="Quote quotation">
                <h2 className="quotation__title">Cytat:</h2>
                <div className="quotation__container">

                {(q.length !== 0) ? this.showQuotation() : <EmptyInfo />}

                </div>
            </div>
        )
    }


}