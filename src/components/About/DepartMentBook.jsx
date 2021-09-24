import React from 'react'
import logo from '../../Assest/logo.png'

function DepartMentBook(props) {
    return (<div className="card " data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000"
        style={
            { height: "55vh" }} >
        <div className="imgBox" >
            <div style={{overflow:"hidden",borderRadius:"15px"}}>
                <p style={{ fontWeight: "600", fontSize: "28px", textAlign: "center" }}>{props.department} </p>
                <div style={{position:"relative", display:"grid", gridTemplateColumns:"50% 50%",}}>
                    <p style={{ paddingLeft: "40px", paddingRight: "40px",}}>{props.description}</p>
                    <div style={{backgroundImage:`url(${logo})`, backgroundSize:"cover",position:"relative",}}></div>
                </div>
            </div>
            <div>
                <img src="unnat sir2.jpg" alt="" />
            </div>
        </div>
        <div className="details" >
            <div className="content" >
                <h2> {props.department}<br /> <span> Head: -{props.head} </span></h2>
                <div id="social" >
                    <p > {props.teamMember} </p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default DepartMentBook