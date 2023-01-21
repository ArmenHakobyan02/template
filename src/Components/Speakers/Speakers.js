import "./Speakers.css"
import fotoOne from "../img/person.png"
import fotoTwo from "../img/txa1.jpg"
import fotoThree from "../img/txa2.jpg"
import fotoFour from "../img/txa3.jpg"
import fotoFive from "../img/kitay11.jpg"
import fotoSix from "../img/gangur mazer.jpg"
import { listdivStyle } from "../../ListDivStyle"


export const Speakers = () => {
    return (
        <div className="Speakers_App" id="Speakers">
            <div className="Speakers_top_div">
                <h6>SPEAKERS</h6>
                <div style={listdivStyle}></div>
                <hr />
                <h2>
                    Experience and knowledge
                    <span>from the best</span>
                </h2>
            </div>

            <div className="Speakers_Main_div">
                <div className="Speakers_Main_item_div">
                    <div className="Speakers_Main_item_Child">
                        <div className="Speakers_Main_wrapper_div">
                            <div className="Speakers_Main_image_wrapper">
                                <img src={fotoOne} />
                            </div>
                            <hr style={{ "margin": "0 auto 15px" }} />
                            <div style={listdivStyle}></div>
                            <div style={{
                                fontfamily: "Rajdhani',Arial,Tahoma,sans-serif",
                                fontSize: "100px",
                                lineHeight: "100px",
                                fontWeight : "700",
                                color : "#1078ad"
                            }} >24</div>
                            <h4>Vivamus in diam turpis. In condimentum maximus tristique.
                                Maecenas non laoreet odio. Fusce lobortis porttitor purus.</h4>
                        </div>
                    </div>
                    <div className="Speakers_Main_item_Child">
                        <div className="Speakers_First_img_div">
                            <img src={fotoTwo} />
                        </div>
                        <div className="Speakers_First_description">
                            <h4>Jennifer Lee</h4>
                            <h6>CEO, <span>QUISQUE LOREM</span></h6>
                            <div></div>
                            <hr />
                            <p>Vestibulum mattis eros at ex aliquam pretium. Quisque porta
                                dui non risus interdum, et varius dui tincidunt adipiscing.
                            </p>
                        </div>
                    </div>
                    <div className="Speakers_Main_item_Child">
                        <div className="Speakers_First_img_div">
                            <img src={fotoThree} />
                        </div>
                        <div className="Speakers_First_description">
                            <h4>Sara Wright</h4>
                            <h6>OWNER, <span>TORTOR FRINGILLA</span></h6>
                            <div></div>
                            <hr />
                            <p>Vestibulum mattis eros at ex aliquam pretium. Quisque
                                porta dui non risus interdum, et varius dui tincidunt adipiscing.
                            </p>
                        </div>
                    </div>
                    <div className="Speakers_Main_item_Child">
                        <div className="Speakers_First_img_div">
                            <img src={fotoFour} />
                        </div>
                        <div className="Speakers_First_description">
                            <h4>Kevin Perry</h4>
                            <h6>CEO, <span>ET ULTRICES</span></h6>
                            <div></div>
                            <hr />
                            <p>Vestibulum mattis eros at ex aliquam pretium. Quisque porta dui
                                non risus interdum, et varius dui tincidunt adipiscing.
                            </p>
                        </div>
                    </div>
                    <div className="Speakers_Main_item_Child">
                        <div className="Speakers_First_img_div">
                            <img src={fotoFive} />
                        </div>
                        <div className="Speakers_First_description">
                            <h4>Doris Flores</h4>
                            <h6>DIRECTOR, <span>ULLAMCORPER</span></h6>
                            <div></div>
                            <hr />
                            <p>Vestibulum mattis eros at ex aliquam pretium. Quisque porta
                                dui non risus interdum, et varius dui tincidunt adipiscing.
                            </p>
                        </div>
                    </div>
                    <div className="Speakers_Main_item_Child">
                        <div className="Speakers_First_img_div">
                            <img src={fotoSix} />
                        </div>
                        <div className="Speakers_First_description">
                            <h4>Brandon Ross</h4>
                            <h6>CEO, <span>INTERDUM</span></h6>
                            <div></div>
                            <hr />
                            <p>Vestibulum mattis eros at ex aliquam pretium. Quisque porta
                                dui non risus interdum, et varius dui tincidunt adipiscing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}