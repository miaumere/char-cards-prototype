import React, { Component } from "react";


export const colors = {
    red: {
      text: 'red',
      background: 'white',
    },
    blue: {
      text: 'blue',
      background: 'black',
    },
  };
  
  export const ColorsContext = React.createContext(
    colors.red
  );