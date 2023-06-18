import React from 'react';
import { StyledBurger } from './StyledBurger';

function Burger({open, setOpen}){
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} color="#FF01B8">
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

export default Burger;