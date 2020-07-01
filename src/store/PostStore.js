import { createContext } from 'react';
import agent from '../services/Agent';

class PostStore {
  parse = (data) => {
    return data.map((item) => item.name);
  };

  addPost = (body) => {
    return agent.Post.add(body).then((data) => {
      return data;
    });
  };

  getRandomPostByUserId = (userId) => {
    return agent.Post.getRandomPostByUserId(userId).then((data) => {
      return data;
    });
  };
}

export default createContext(new PostStore());
