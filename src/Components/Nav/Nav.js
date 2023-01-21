import "./Nav.css"
import logo from "../img/logo.png"
import { GiShoppingCart } from "react-icons/gi"
import { useState } from "react"
import { Link } from "react-scroll"

export const Nav = () => {

    const [NavBar, SetNavBar] = useState(false)
    const [value, setValue] = useState(true)

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 100) {
            setValue(false)
        } else {
            setValue(true)
        }

    })
    return (

        <div className={value ? "Nav_App" : "Nav_App_sticky"}>
            <div className={value ? "Nav_container" : "Nav_container_sticky"}>
                <div className="div_bar_left">
                    <div className="logo">
                        <a href="#">
                            <img src={logo} className={value ? "" : "ScrollImg"} />
                        </a>
                    </div>
                    <div className="menu_Wrapper">
                        <ul className={value ? "menu_item animmenu_item" : "menu_item"}>
                            <li><Link to="Start" className={value ? null : "list_a_Anim"} spy={true} smooth={true} offset={-60} duration={100}>START</Link></li>
                            <li><Link to="About" className={value ? null : "list_a_Anim"} spy={true} smooth={true} offset={-60} duration={100}>ABOUT</Link></li>
                            <li><Link to="Agenda" className={value ? null : "list_a_Anim"} spy={true} smooth={true} offset={-60} duration={100}>AGENDA</Link></li>
                            <li><Link to="Sponsers" className={value ? null : "list_a_Anim"} spy={true} smooth={true} offset={-60} duration={100}>SPEAKERS</Link></li>
                            <li><Link to="Tickets" className={value ? null : "list_a_Anim"} spy={true} smooth={true} offset={-60} duration={100}>TICKETS</Link></li>
                            <li><Link to="Contact" className={value ? null : "list_a_Anim"} spy={true} smooth={true} offset={-60} duration={100}>CONTACT</Link></li>
                        </ul>
                    </div>
                </div>
                {/* responsive */}

                <div className="Nav_Bar_Bars">
                    <i class="fa-solid fa-bars" onClick={() => SetNavBar(!NavBar)}></i>
                </div>
                {NavBar ?
                    <div className="responsiv_Nav_Bar" >
                        <button className="Resopnsiv_btn_close" onClick={() => SetNavBar(false)}></button>
                        <div className="Nav_Bar_menu_item">
                            <i class="fa-solid fa-xmark" onClick={() => SetNavBar(false)}></i>
                            <div className="Responsiv_Btn">
                                <button>
                                    <a href="">
                                        BUY NOW
                                        <GiShoppingCart />
                                    </a>
                                </button>
                            </div>
                            <ul >
                                <li><Link to="Start" spy={true} smooth={true} offset={-60} duration={100}>START</Link></li>
                                <li><Link to="About" spy={true} smooth={true} offset={-60} duration={100}>ABOUT</Link></li>
                                <li><Link to="Agenda" spy={true} smooth={true} offset={-60} duration={100}>AGENDA</Link></li>
                                <li><Link to="Sponsers" spy={true} smooth={true} offset={-60} duration={100}>SPEAKERS</Link></li>
                                <li><Link to="Tickets" spy={true} smooth={true} offset={-60} duration={100}>TICKETS</Link></li>
                                <li><Link to="Contact" spy={true} smooth={true} offset={-60} duration={100}>CONTACT</Link></li>
                            </ul>

                        </div>

                    </div> : null}

                <div className="div_bar_right">
                    <button>
                        <a href="">
                            BUY NOW
                            <GiShoppingCart />
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

