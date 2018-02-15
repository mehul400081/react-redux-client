import React, { Component } from 'react'
import { connect } from 'react-redux';
import { searchperson, fetchallpersons } from '../actions/person-actions';

class PersonSearch extends Component {

  constructor(props) {
    super(props);
    this.searchInputChange = this.searchInputChange.bind(this);
  }

  searchInputChange(event) {
    if (event.target.value.length > 0) {
      this.props.onChange(event.target.value);
    } else {
      this.props.onClear();
    }
  }

  render() {
    return (
      <div>
        <input type="text" className="search-input" onChange={this.searchInputChange} />
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name) => {
      dispatch(searchperson(name))
    },
    onClear: () => {
      dispatch(fetchallpersons())
    }
  }
}

export default connect(null, mapDispatchToProps)(PersonSearch)


