import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchallpersons } from '../actions/person-actions';
import PersonList from '../components/person-list';
import PersonSearch from '../components/person-search';

class PersonListPage extends Component {

    componentDidMount() {
        this.props.fetchallpersons();
    }
  

    render() {
        return (
            <div>
                <PersonSearch/>
                <PersonList persons={this.props.persons} />
            </div>
        )
    }
}

// Make contacts  array available in  props
function mapStateToProps(state) {
    console.log(state);
    return {
        persons: state.personStore.persons,

    }
}

export default connect(mapStateToProps, { fetchallpersons })(PersonListPage);