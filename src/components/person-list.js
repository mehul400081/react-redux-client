import React from 'react';
import PersonEntry from './person-entry'


export class PersonList extends React.Component {
    render() {
        return (
            <div>
                <table styleclass='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.persons.map((person) =>
                            <PersonEntry key={person._id} person={person} />
                        )}
                    </tbody>
                </table>
            </div>);
    }
}

export default PersonList