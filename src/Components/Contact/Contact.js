import "./Contact.css"
import { listdivStyle } from "../../ListDivStyle"
import FooterIMages from "../img/Footer-Images.jpg"

export const Contact = () => {
    return (
        <div className="Contact_App" id="Contact">
            <div className="Contact_First_div">
                <div className="Contact_top_div">
                    <h6>CONTACT</h6>
                    <div style={listdivStyle}></div>
                    <hr />
                    <h2>Any question? Call us <span>+61 (0) 3 8376 6284</span></h2>
                    <h4>or send your question at
                        <a style={{ "color" :"#eb6755" }} href="#"><span>noreply@envato.com</span></a>
                    </h4>
                </div>

                <div className="Contact_Center_div">
                    <div className="Contact_Center_left_div">
                        <div className="Contact_left_top_div">
                            <h6>EVENT PLACE</h6>
                            <div style={listdivStyle}></div>
                        </div>
                        <div className="Contact_left_center_div">
                            <div className="Contact_left_images_div">
                                <img src={FooterIMages} />
                            </div>
                            <div className="Contact_left_description">
                                <h4>BE EVENT</h4>
                                <p>Level 13, 2 Elizabeth St,
                                    <br />
                                    Melbourne, Victoria 3000,
                                    <br />
                                    Australia
                                </p>
                                <p>
                                    <a href="#">
                                        <span>noreply@envato.com</span>
                                    </a>
                                    <br />
                                    <a href="#">https://themeforest.net</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="Contact_Center_Right_div">
                        <div className="Contact_right_top_div">
                            <h6>ORGANIZER</h6>
                            <div style={listdivStyle}></div>
                        </div>
                        <div className="Contact_right_center_div">
                            <h4>BE EVENT</h4>
                            <p>Level 13, 2 Elizabeth St,
                                <br />
                                Melbourne, Victoria 3000,
                                <br />
                                Australia
                            </p>
                            <p>
                                <a href="#">
                                    <span>noreply@envato.com</span>
                                </a>
                                <br />
                                <a href="#">https://themeforest.net</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}