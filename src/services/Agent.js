import Axios from 'axios';

Axios.defaults.baseURL =
  'https://cors-anywhere.herokuapp.com/https://contribution-bites-final.azurewebsites.net/api';

const responseBody = (response) => response.data;

const requests = {
  get: (url) => Axios.get(url).then(responseBody),
  post: (url, body) => Axios.post(url, body).then(responseBody),
  put: (url, body) => Axios.put(url, body).then(responseBody),
  delete: (url) => Axios.delete(url).then(responseBody),
};

const Post = {
  add: (body) => requests.post(`/post/InsertPost`, body),
  getRandomPostByUserId: (userId) =>
    requests.get(`/post/GetSinglePostForUser/${userId}`),
};

const Test = {
  list: () => requests.get(''),
  details: (Id) => requests.get(`/testes/${Id}`),
  create: (item) => requests.post('/testes', item),
  update: (item) => requests.put(`/testes/${item.Id}`, item),
  delete: (Id) => requests.delete(`/testes/${Id}`),
};

const Leaderboard = {
  listUser: () => requests.get(`/user/GetUsersLeaderBoard`),
};

export default { Test, Post, Leaderboard };
