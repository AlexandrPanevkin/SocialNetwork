import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
    return  <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='profile' className={({ isActive }) => (isActive ? s.active : '')}>Профиль</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='dialogs' className={({ isActive }) => (isActive ? s.active : '')} >Сообщения</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='users' className={({ isActive }) => (isActive ? s.active : '')} >Пользователи</NavLink>
    </div>
    <div className={s.item}>
      <NavLink  to='news' className={({ isActive }) => (isActive ? s.active : '')}>Новости</NavLink>
    </div>
    <div className={s.item}>
      <NavLink  to='music' className={({ isActive }) => (isActive ? s.active : '')}>Музыка</NavLink>
    </div>
    <div className={s.item}>
      <NavLink  to='settings' className={({ isActive }) => (isActive ? s.active : '')}>Настройки</NavLink>
    </div>
  </nav>
}

export default Navbar;