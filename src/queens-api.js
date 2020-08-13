import request from 'superagent';

const URL = 'https://back-end-lab-08.herokuapp.com';

export function fetchThoseQueens() {
    return request.get(`${URL}/queens`);
  }
  
export function fetchThatQueen(id) {
    return request.get(`${URL}/queens/${id}`);
}


  