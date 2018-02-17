import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import { searchperson, fetchallpersons } from '../actions/person-actions';


class PersonAdd extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <table><tbody>
                    <tr>
                        <td>Name: </td><td><input type="text" className="search-input" /></td>
                        <td>email: </td><td><input type="text" className="search-input" /></td>
                        <td>age: </td><td><input type="text" className="search-input" /></td>
                    </tr>
                    <tr><td colSpan="6"></td></tr>
                </tbody></table>
            </div>
        )
    }
}
export default PersonAdd;