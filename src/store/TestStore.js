import { createContext } from "react";
import agent from "../services/Agent";

class TestStore  {

  parse = (data) => { return data.map(item => item.name );}

  loadTestes = () => {
     return   agent.Test.list()
        .then((data) => {
            return this.parse(data);
        });
   }

}

export default createContext(new TestStore());
