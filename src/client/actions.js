import http from './utils/http';

const base = '/api/games'

function getGames() {
  const url = base;
  return http.get(url);
}

function getGameById(id) {
  const url = `${base}/${id}`;
  return http.get(url);
}

function createGame(params) {
  const url = base;
  return http.post(url, params);
}

export {
  getGames,
  getGameById,
  createGame,
};