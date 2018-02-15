import React, { Component} from 'react'
import { connect } from 'react-redux';
import { searchperson } from '../actions/person-actions';

class PersonSearch extends Component {

  constructor(props){
    super(props);          
    this.searchInputChange = this.searchInputChange.bind(this);
   
    }
  searchInputChange(event) {
    this.props.onChange(event.target.value);
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
      }
  }
}

connect(null, mapDispatchToProps)(PersonSearch)

export default PersonSearch
