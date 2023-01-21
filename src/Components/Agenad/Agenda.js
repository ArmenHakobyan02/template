import "./Agenda.css"
import { AiTwotoneCalendar } from "react-icons/ai"

export const Agenda = () => {
    return (
        <div className="Agenda" id="Agenda">
            <div className="Agenda_top_div">
                <div className="Agenda_top_item">
                    <h6>AGENDA</h6>
                    <div className="Agenda_top_item_list"></div>
                    <hr />
                    <h2>Live these <span>three wonderful</span> days with us!</h2>
                </div>
            </div>

            <div className="Agenda_Main">
                <div className="Agenda_Main_top_div">
                    <div className="Agenda_Main_top_item">
                        <h2 style={{ color: "#d84e44" }}>Day 1</h2>
                        <h4>09:30 - 10:00 AM</h4>
                        <h6>STARTING CONFERENCES</h6>
                        <p>Donec pellentesque, lectus nec fermentum dignissim</p>
                        <h6>PRESENTATION OF SPEAKERS</h6>
                        <hr />
                        <h4>10:00 - 02:30 PM</h4>
                        <h6>VR USE IN REAL LIFE PART 1</h6>
                        <p>Curabitur facilisis convallis justo, nec egestas tortor
                            convallis in terdum et malesuada fames ac ante</p>
                        <hr />
                        <h4>02:00 - 03:00 PM</h4>
                        <h6>BREAK</h6>
                        <hr />
                        <h4>03:00 - 05:00 PM</h4>
                        <h6>VR USE IN REAL LIFE PART 2</h6>
                    </div>
                    <div className="Agenda_Main_top_item">
                        <h2 style={{ color: "#d84e44" }}>Day 2</h2>
                        <h4>10:00 AM - 01:00 PM</h4>
                        <h6>VR TECHNOLOGY IN VIDEO GAMES, PART 1</h6>
                        <p>Duis posuere massa et nibh commodo, eget viverra
                            lectus pellentesque egestas semper ante</p>
                        <hr />
                        <h4>01:00 - 01:30 PM</h4>
                        <h6>BREAK</h6>
                        <hr />
                        <h4>01:30 - 04:00 PM</h4>
                        <h6>VR TECHNOLOGY IN VIDEO GAMES, PART 2</h6>
                        <hr />
                        <h4>04:00 - 05:30 PM</h4>
                        <h6>DISCUSSION PANEL</h6>
                    </div>
                    <div className="Agenda_Main_top_item">
                        <h2 style={{ color: "#d84e44" }}>Day 3</h2>
                        <h4>10:00 AM - 02:00 PM</h4>
                        <h6>ADVERTISING & NEW MEDIA USING VR</h6>
                        <p>Sed suscipit, ligula non aliquam dignissim, orci elit
                            finibus libero, et venenatis justo nunc venenatis velit</p>
                        <hr />
                        <h4>02:00 - 02:30 PM</h4>
                        <h6>BREAK</h6>
                        <hr />
                        <h4>02:30 - 04:00 PM</h4>
                        <h6>DISCUSSION PANEL</h6>
                        <hr />
                        <h4>04:00 - 04:30 PM</h4>
                        <h6>SUMMARY OF THE CONFERENCE</h6>
                        <hr />
                        <h4>04:30 PM</h4>
                        <h6>INTEGRATION MEETING</h6>
                    </div>
                </div>
                <div className="Agenda_Main_days-houre_div">
                    <h4>Nam ullamcorper rhoncus sem vitae tempus</h4>
                    <div className="Main_days-houre_div_item">
                        <div className="Main_days-houre_div_item_child">
                            <div className="number-wrapper">
                                <div className="number-days">00</div>
                                <h3 className="title">days</h3>
                                <hr />
                            </div>
                            <div className="number-wrapper">
                                <div className="number-days">00</div>
                                <h3 className="title">houre</h3>
                                <hr />
                            </div>
                            <div className="number-wrapper">
                                <div className="number-days">00</div>
                                <h3 className="title">minutes</h3>
                                <hr />
                            </div>
                            <div className="number-wrapper">
                                <div className="number-days">00</div>
                                <h3 className="title">seconds</h3>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="Main_days-houre_div_btn">
                        <button>
                            <a href="#Tickets">
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