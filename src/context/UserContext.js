import { createContext, useState } from 'react';
import { getUser } from '../services/auth';


// TODO -- create the user provider!
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };

// After lunch - hello place holder needs to update with user email
// sign out button needs to take user back to log in screen 
// list component needs to render 
  // user should be able to add new items to their list 