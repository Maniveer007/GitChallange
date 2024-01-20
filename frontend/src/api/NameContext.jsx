// MyContext.js
import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [data, setData] = useState('Initial Data');

  const updateData = newData => {
    setData(newData);
  };

  return (
    <MyContext.Provider value={{ data, updateData }}>
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  return useContext(MyContext);
};

export { MyProvider, useMyContext };
