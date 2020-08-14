import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://back-end-lab-08.herokuapp.com';

export function fetchThoseQueens() {
    return request.get(`${URL}/queens`);
  }
  
export function fetchThatQueen(id) {
    return request.get(`${URL}/queens/${id}`);
}

export function createThatQueen(queenData) {
  return request.post(`${URL}/queens`, queenData)
}