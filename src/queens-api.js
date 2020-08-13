import request from 'superagent';

const URL = 'http://localhost:3000';

export function fetchThoseQueens() {
    return request.get(`${URL}/queens`);
  }
  
export function fetchThatQueen(id) {
    return request.get(`${URL}/queens/${id}`);
}


  