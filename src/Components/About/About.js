import "./About.css"
import { AiTwotoneCalendar } from "react-icons/ai"
import IkonOne from "../img/ikon1.png"
import IkonTwo from "../img/ikon2.png"
import IkonTree from "../img/ikon3.png"

export const About = () => {
    return (
        <div className="About_App" id="About">
            <div className="About_top_div">
                <div className="About_top_item_div">
                    <h6>ABOUT</h6>
                    <div className="About_line"></div>
                    <hr />
                    <h2>The most
                        <span>exciting technological</span>
                        <br />
                        world conference of 2019.
                    </h2>
                </div>
                <div className="About_Main_div">
                    <div className="Main_item">
                        <div className="Main_left_div">
                            <div className="Main_image_div">
                                <img src={IkonOne} />
                            </div>
                        </div>
                        <div className="Main_right_div">
                            <div className="Main_right_item_div">
                                <h6>01</h6>
                                <div></div>
                                <hr />
                                <h4>VR in real life and business</h4>
                            </div>
                        </div>
                        <div className="Main_bottom_div">
                            <div className="Main_bottom_item">
                                <p>Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus.</p>
                                <p>Sed mollis consequat eleifend. Aliquam consectetur orci eget dictum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="Main_item">
                        <div className="Main_left_div">
                            <div className="Main_image_div">
                                <img src={IkonTwo} />
                            </div>
                        </div>
                        <div className="Main_right_div">
                            <div className="Main_right_item_div">
                                <h6>02</h6>
                                <div></div>
                                <hr />
                                <h4>VR technology in video games</h4>
                            </div>
                        </div>
                        <div className="Main_bottom_div">
                            <div className="Main_bottom_item">
                                <p>Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus.</p>
                                <p>Sed mollis consequat eleifend. Aliquam consectetur orci eget dictum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="Main_item">
                        <div className="Main_left_div">
                            <div className="Main_image_div">
                                <img src={IkonTree} />
                            </div>
                        </div>
                        <div className="Main_right_div">
                            <div className="Main_right_item_div">
                                <h6>03</h6>
                                <div></div>
                                <hr />
                                <h4>Advertising & new media using VR</h4>
                            </div>
                        </div>
                        <div className="Main_bottom_div">
                            <div className="Main_bottom_item">
                                <p>Vivamus in diam turpis. In condimentum maximus tristique. Maecenas non laoreet odio. Fusce lobortis porttitor purus.</p>
                                <p>Sed mollis consequat eleifend. Aliquam consectetur orci eget dictum.</p>
                            </div>
                        </div>
                    </div>

                    <div className="Main_Footer">
                        <div className="Main_Footer_left_div"></div>
                        <div className="Main_Footer_right_div">
                            <div className="Footer_right_One">
                                <div className="Footer_right_One-item">
                                    <div></div>
                                    <hr />
                                    <h4>Join other conference participants and buy tickets at a price from</h4>
                                    <hr style={{ "margin": "0 auto 40px" }} />
                                    <div className="Fotter_right_btn">
                                        <a href="#Tickets">
                                            <span><AiTwotoneCalendar /></span>
                                            <span>BUY TICKET</span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className="Footer_right_Two">
                                <b>$59</b>
                            </div>
                            <div className="Footer_right_Tree">
                                <p>The price is valid for purchase until January 1, 2019</p>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}