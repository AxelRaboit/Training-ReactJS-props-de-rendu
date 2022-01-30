import React, { Component } from 'react';
import goku from '../images/goku.png'

class Goku extends Component {

    render() {

        const { hits, addOne, name } = this.props;

        return (
            <div className='col'>
                <img className='character__image' src={goku} alt="goku image" />
                <br />
                <button onClick={addOne} className='btn btn-success'>{name} Frappe</button>
                <table className='table table-stripped'>
                    <thead>
                        <tr>
                            <th scope="col">Coups</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{hits}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Goku;
