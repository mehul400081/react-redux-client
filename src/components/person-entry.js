import React from 'react';

export default function PersonEntry({ person }) {

    return (
        <tr key={person._id}>
            <td>{person.name}</td>
            <td>{person.email}</td>
            <td>{person.age}</td>
        </tr>
    )


}