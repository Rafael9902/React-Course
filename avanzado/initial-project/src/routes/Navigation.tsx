import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import reactLogo from '../assets/react.svg'
import { ROUTES } from "./routes"

export const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={reactLogo} alt='React Logo'></img>

                        <ul>
                            {
                                ROUTES.map(({to, name}) => (
                                    <li key={to}>
                                        <NavLink 
                                            to={to}
                                            className={({isActive}) => isActive ? 'nav-active' : ''}
                                        >{ name }</NavLink>
                                    </li>
                                ))
                            }
                       </ul>
                    </nav>

                    <Routes>
                        { ROUTES.map(({to, path, Component}) => (
                            <Route
                                key={to}
                                path={path} 
                                element={ <Component /> }/>
                        ))}

                        <Route path="/*" element={ <Navigate to={ROUTES[0].to}/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}
