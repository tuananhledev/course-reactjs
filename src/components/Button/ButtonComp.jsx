import React from 'react';
import style from './index.module.css';
import { Link } from 'react-router-dom';

const ButtonComp = ({ children, to, className, ...props }) => {
   let Comp = 'button';
   let opts = {};

   if (to) {
      opts.to = to;
      Comp = Link;
   }

   return (
      <Comp {...props} {...opts} className={`btn ${style.button} ${className}`}>
         {children}
      </Comp>
   );
};

export default ButtonComp;
