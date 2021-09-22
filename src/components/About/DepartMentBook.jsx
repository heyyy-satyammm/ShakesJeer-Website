import React from 'react'

function DepartMentBook(props) {
    return (<div className="card " data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000"
        style={
            { height: "55vh" }} >
        <div className="imgBox" >
            <div> <p> {props.department} </p><p>{props.description}</p>
            </div>
            <div> <img src="unnat sir2.jpg"
                alt="" /> </div> </div> <div className="details" >
            <div className="content" >
                <h2 > {props.department} <br /> <span> Head: -{props.head} </span></h2>

                <div id="social" >
                    <p > {props.teamMember} </p> </div>

            </div> </div> </div>
    )
}
export default DepartMentBook