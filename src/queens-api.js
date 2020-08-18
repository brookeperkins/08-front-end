import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://back-end-lab-08.herokuapp.com';

export function fetchThoseQueens() {
    return request.get(`${URL}/queens`);
  }
  
export function fetchThatQueen(id) {
    return request.get(`${URL}/queens/${id}`);
}

export function fetchWinners() {
  return request.get(`${URL}/winners`);
}

export function createThatQueen(queenData) {
  return request.post(`${URL}/queens`, queenData)
}

export function deleteQueen(id) {
  return request.delete(`${URL}/queens/${id}`);
}

export function updateQueen(id, updatedQueen) {
  return request.put(`${URL}/queens/${id}`, updatedQueen);
}