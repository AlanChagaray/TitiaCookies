import React from 'react'

import { RiCake3Line} from 'react-icons/ri';
import { BiCake} from 'react-icons/bi';
import { SiCakephp} from 'react-icons/si';
import { GiCakeSlice} from 'react-icons/gi';
import { BiCookie} from 'react-icons/bi';

function AppIcons(){
  
  return <li className="p-4 grid grid-cols-5 pl-24" >
      <ul className="p-4"><BiCookie size={42} />Cookies</ul>
      <ul className="p-4"><BiCake size={42} />Tortas</ul>
      <ul className="p-4"><RiCake3Line size={42}/>Muffins</ul>
      <ul className="p-4"><SiCakephp size={42}/>Tartas</ul>
      <ul className="p-4"><GiCakeSlice size={42}/>Macarrones</ul>
    </li>
  
}

export default  AppIcons 