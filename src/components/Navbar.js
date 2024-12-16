import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/' className="logo">블로그</NavLink>
      <ul>
        <li><NavLink to="/" className="navLink">홈</NavLink></li>
        <li><NavLink to="/Posts" className="navLink">게시글</NavLink></li>
        <li><NavLink to="/Profile" className="navLink">프로필</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar