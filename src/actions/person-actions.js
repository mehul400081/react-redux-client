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