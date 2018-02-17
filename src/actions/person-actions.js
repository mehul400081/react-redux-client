import { client } from './';

const url = '/persons';
const searchurl = '/persons/findByName';

export function fetchallpersons() {
  return dispatch => {
    dispatch({
      type: 'FETCH_ALL_PERSONS',
      payload: client.get(url)
    })
  }
}

export function searchperson(name) {
  console.log('searchperson called');
  return dispatch => {
    dispatch({
      type: 'SEARCH_PERSON',
      payload: client.get(`${searchurl}/${name}`)
    })
  }
}
export function addperson(person) {
  console.log(person);
  return dispatch => {
    dispatch({
      type: 'ADD_PERSON',
      payload: client.post(`${url}`,person)
    })
  }
}

