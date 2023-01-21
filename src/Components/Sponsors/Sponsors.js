import "./Sponsors.css"
import {listdivStyle} from "../../ListDivStyle"
import Folive from"../img/folive.png"
import Barook from "../img/barook.png"
import Zeisson from "../img/zeisson.png"
import Kaparu from "../img/kaparu.png"
import Expret from "../img/expret.png"
import Sohua from "../img/sohua.png"

export const Sponsors = ()=>{
    return(
        <div className="Sponsors_App" id="Sponsers">
            <div className="Sponsers_First_div">
                <div className="Sponsers_top_div">
                    <div className="Sponser_top_item_div">
                        <h6>SPONSORS</h6>
                        <div style={listdivStyle}></div>
                    </div>
                </div>
                <div className="Sponsers_Main_div">
                    <div className="Sponsers_Main_item_div">
                        <div className="Sponsers_Main_img_wrapper">
                            <img src={Folive} alt="Sponsers"/>
                        </div>
                        <hr style={{"margin": "0 auto 50px"}} />
                        <h4>Folive</h4>
                        <p>Curabitur sed iaculis dolor, non congue ligula.
                             Maecenas imperdiet ante eget hendrerit posuere.
                        </p>
                        <h6><a href="#">WWW.LOREMIPSUM.COM</a></h6>
                    </div>
                </div>
                <div className="Sponsers_Main_div">
                    <div className="Sponsers_Main_item_div">
                        <div className="Sponsers_Main_img_wrapper">
                            <img src={Barook} alt="Sponsers"/>
                        </div>
                        <hr style={{"margin": "0 auto 50px"}} />
                        <h4>Barook</h4>
                        <p>Curabitur sed iaculis dolor, non congue ligula.
                            Maecenas imperdiet ante eget hendrerit posuere.
                        </p>
                        <h6><a href="#">WWW.LOREMIPSUM.COM</a></h6>
                    </div>
                </div>
                <div className="Sponsers_Footer_div">
                    <div className="Sponsers_Footer_Chilc_div">
                        <img src={Zeisson} alt="Sponsers"/>
                    </div>
                    <div className="Sponsers_Footer_Chilc_div">
                        <img src={Kaparu} alt="Sponsers"/>
                    </div>
                    <div className="Sponsers_Footer_Chilc_div">
                        <img src={Expret} alt="Sponsers"/>
                    </div>
                    <div className="Sponsers_Footer_Chilc_div">
                        <img src={Sohua} alt="Sponsers"/>
                    </div>
                </div>
            </div>
        </div>
    )
}