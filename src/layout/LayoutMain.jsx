import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import style from '../assets/css/LayoutMain.module.css'

function LayoutMain(){
    return(
        <>
            <header>
                <div className={style.navbar}>
                    <p>Navbar</p>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <div className={style.footer}>
                    <p>footer</p>
                </div>
            </footer>
        </>

    )
}

export default LayoutMain;