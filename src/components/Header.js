import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <header>
                <h1>Header</h1>
                <p>Header Layout</p>
                <nav>
                    <h1>Blog App</h1>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="blogs" >Blogs</NavLink>
                    <NavLink to="create" >Create</NavLink>
                    <NavLink to="contact" >Contact</NavLink>
                </nav>
                <main>
                    <Outlet />
                </main>
            </header>
        </div>
    )
}
export default Header;
