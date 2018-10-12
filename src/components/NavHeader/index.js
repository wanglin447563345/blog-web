import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.less'
import LOGO from '../../assets/logo.png'

const NavHeader = () =>{
    return <div className="nav_header">
        <nav className="w1200">
            <img src={LOGO} alt=""/>
            <NavLink to="/home" exact activeClassName="active">首页</NavLink>
            <NavLink to="/list" activeClassName="active">文章列表</NavLink>
            <NavLink to="/item" activeClassName="active">项目介绍</NavLink>
            <NavLink to="/about" activeClassName="active">关于</NavLink>
            <NavLink to="/board" activeClassName="active">留言板</NavLink>
        </nav>
    </div>
};
export default NavHeader