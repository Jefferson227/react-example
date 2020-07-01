import { createContext } from 'react';
import agent from '../services/Agent';

class LeadershipStore {
  listUser = () => {
    return agent.Leaderboard.listUser().then((data) => {
      return data;
    });
  };
}

export default createContext(new LeadershipStore());
