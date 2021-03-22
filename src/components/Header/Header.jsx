import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login, logout}) => {
    return (
        <header className={s.header}>

            <img
                src='https://icon2.kisspng.com/20180811/eur/kisspng-logo-brand-font-circle-clip-art-5b6e6205cf1289.1287867715339607098482.jpg'
                alt=''/>
            <div className={s.loginBlock}>
                {isAuth
                    ? <div>{login} - <button onClick={logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header