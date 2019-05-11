import React from 'react';
import "./Weight.scss";

export default class Weight extends React.Component {

    render() {
        return (

            <article className="Weight size">
            <div className="size__container">
                <h2 className="size__title">Wzrost i waga</h2>
                <div className="size__content">
                <table className="table">
                <thead>
                    <tr className="table table__row">
                        <th className="table table__heading">Opis</th>

                        <th className="table table__heading">Niemowlę 
                            <em>(0-3)</em>
                        </th>

                        <th className="table table__heading">Dziecko  
                            <em>(3-11)</em>
                        </th>

                        <th className="table table__heading">
                            Nastolatek
                            <em>(11-15)</em>
                        </th>

                        <th className="table table__heading">Młody dorosły 
                            <em>(15-20)</em>
                        </th>

                        <th className="table table__heading">Dorosły 
                            <em>(20+)</em>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table table__row">
                        <th className="table table__heading">Waga</th>
                        
                        <td className="table table_cell">12 kg</td>
                        <td className="table table_cell">1 kg</td>
                        <td className="table table_cell">12 kg</td>
                        <td className="table table_cell">12 kg</td>
                        <td className="table table_cell">12 kg</td>


                    
                    </tr>
                    <tr className="table table__row">
                        <th className="table table__heading">Wzrost</th>

                        <td className="table table_cell">12 kg</td>
                        <td className="table table_cell">12 kg</td>
                        <td className="table table_cell">12 kg</td>
                        <td className="table table_cell">12 kg</td>
                        <td className="table table_cell">12 kg</td>

                    </tr>
                </tbody>
                </table>
                </div>
                </div>
            </article>


        )
    }
}