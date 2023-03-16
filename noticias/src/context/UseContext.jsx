import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const ID = localStorage.getItem('user');
    return ID ? ID : null;
  });

  const navigate = useNavigate();

  const log = (user) => {
    localStorage.setItem('user', user);
    setUser(user);
    navigate('/Home');
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <UserContext.Provider value={{ user, log, logout, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
