import "./TICKETS.css"
import { listdivStyle } from "../../ListDivStyle"
import TicketsOneIMages from "../img/TicketsOneimg.png"
import TicketsTwoIMages from "../img/TicketsTwoimg.png"
import TicketsThreeIMages from "../img/TicketsThreeimg.png"
import { AiTwotoneCalendar } from "react-icons/ai"

export const Tickets = () => {
    return (
        <div className="Tickets_App" id="Tickets">
            <div className="Tickets_First_div">
                <div className="Tickets_First_top_div">
                    <h6>TICKETS</h6>
                    <div style={listdivStyle}></div>
                    <hr />
                    <h2>Buy tickets for yourself or
                        <span>your team</span>
                    </h2>
                </div>
                <div className="Tickets_center_div">
                    <div className="Tickets_center_item_div">
                        <div className="Tickets_center_images_div">
                            <img src={TicketsOneIMages} />
                        </div>
                        <hr />
                        <h3>Basic <span>$59</span></h3>
                        <h4>— Single ticket</h4>
                        <ul>
                            <li>Vestibulum semper dui</li>
                            <li>Integer aliquet mauris ut sollicitudin</li>
                            <li>Mauris vel dolor sit amet</li>
                        </ul>
                        <hr />
                        <button>
                            <a href="#">
                                <span><AiTwotoneCalendar /></span>
                                <span>BUY TICKET</span>
                            </a>
                        </button>
                    </div>
                    <div className="Tickets_center_item_div">
                        <div className="Tickets_center_images_div">
                            <img src={TicketsTwoIMages} />
                        </div>
                        <hr />
                        <h3>Basic + <span>$99</span></h3>
                        <h4>— Single ticket</h4>
                        <ul>
                            <li>Vestibulum semper dui</li>
                            <li>Integer aliquet mauris ut sollicitudin</li>
                            <li>Mauris vel dolor sit amet</li>
                            <li>Curabitur scelerisque risus</li>
                        </ul>
                        <hr />
                        <button>
                            <a href="#">
                                <span><AiTwotoneCalendar /></span>
                                <span>BUY TICKET</span>
                            </a>
                        </button>
                    </div>
                    <div className="Tickets_center_item_div">
                        <div className="Tickets_center_images_div">
                            <img src={TicketsThreeIMages} />
                        </div>
                        <hr />
                        <h3>TeamPro <span>$449</span></h3>
                        <h4>— for 5 members</h4>
                        <ul>
                            <li>Nulla eget odio et eros bibendum elementum quis non purus</li>
                            <li>Nulla sit amet dolor scelerisque, consectetur justo aliquam</li>
                        </ul>
                        <hr />
                        <button>
                            <a href="#">
                                <span><AiTwotoneCalendar /></span>
                                <span>BUY TICKET</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}