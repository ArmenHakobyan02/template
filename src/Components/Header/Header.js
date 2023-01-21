import "./Header.css"
import fotoGirl from "../img/download.png"
import { AiOutlineDown } from "react-icons/ai"

export const Header = () => {
    return (
        <div className="Header_App" id="Start">
            <div className="Header_item_div">
                <div className="Header_right_div">
                    <div className="Header_right_first_img_div">
                        <img className="Header_img_gril" src={fotoGirl} />
                    </div>

                    <div className="Header_div">
                        <div className="Header_name_div">Virtual reality  <br /> has never <br /> been so close!</div>
                        <div className="Header_title_div">
                            <p>Sed sit amet dapibus magna, eu aliquam lorem.Praesent luctus <br />
                                velit sit amet commodo posuere. Nulla auctor,justo sed ullamcorper
                                <br /> feugiat, leo ante dapibus magna.</p>
                        </div>
                        <div className="Header_btn_div">
                            <div className="Header_btn_one"><a href="">BUY TICKET</a></div>
                            <div className="Header_btn_two"><a href="">ABOUT EVENT</a></div>
                        </div>
                    </div>

                </div>

                <div className="Header_bottom_div">
                    <div className="Header_bottom_item_div">
                        <div></div>
                        <h6>
                            <span>SCROLL DOWN </span>
                            <AiOutlineDown />
                        </h6>
                    </div>
                </div>

                {/* poition img */}
                
                <div className="Heaader_bottom_img">
                    <div className="Header_bottom_img_one_div">
                        <div className="Header_bottom_img_item-one">
                            24
                            <h4>experienced<br /> speakers</h4>
                            <h6><a href="#Section_Three">READ MORE -</a></h6>
                        </div>
                    </div>
                    <div className="Header_bottom_img_two_div">
                        <div className="Header_bottom_img_item-two">
                            3
                            <h4>exciting<br /> days</h4>
                            <h6><a href="#Agenda">READ MORE -</a></h6>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}