import React from "react";
import '../../style/about.css'
import '../../style/bubble.css'
import logo from '../../Assest/logo.png'
import tech from '../../Assest/tech.png'
import gra from '../../Assest/gra.png'
import pr from '../../Assest/pr.png'
import performer from '../../Assest/performer.png'
import cont from '../../Assest/cont.png'
import HoneyBlock from './HoneyBlock'
import DepartMentBook from "./DepartMentBook";

const About = () => {

   return (
      <div data-aos="fade-up" data-aos-offset="20">
         <div id="section_logo" style={{width:"100%"}}>
            <div className="section_logo" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
               <img src={logo} alt="" />
               {/* style={{ width: "450px", height: "450px",backgroundColor:"red", borderRadius:"50%" }} */}
            </div>
            <div className="box" data-aos="fade-up" data-aos-offset="200" data-aos-duration="800"> 
               <span></span>
               <p>We're a highly motivated team of talented undergrads of NSUT who are all commited to the cause : proliferate
                  more involvement of students in the open mics as we provide a platform for the talent that is concealed
                  within the students in abundance! The open mic covers Stand Ups, Raps and Poetry with a special limelight on
                  the art of comedy and wit. ShakesJeer is not confined to the aforementioned performances as we believe in
                  augmentation by inculcating new ideas and activities pertaining to open mics.
                  ShakesJeer also specialises in serving palatable content to avid readers, curators or anyone who's just
                  looking for a light hearted read as we release our magazine Shakesjournal annually, starting from the year
                  2021. We envision success and a stage full of opportunities not only for the students of NSUT but for any
                  person, student or not, across the country with the right passion and the will to participate.</p>
            </div>
         </div>
         <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" >
            <h1 className="our_team headingEffect" style={{fontSize:"36px"}}>Our Team</h1>
            <div className="honey">

               <div className="comb_0">
                  <HoneyBlock name="divya" position="head" image={logo} />
               </div>

               <div className="comb_1">
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />
               </div>

               <div className="comb_2">
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />

               </div>
  
               <div className="comb_3">
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />
               </div>

               <div className="comb_4">
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />
               </div>

               <div className="comb_5">
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />
               </div>


            </div>
         </div>

         <h1 className="headingEffect" style={{fontSize:"36px"}} data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">Departments</h1>

         <div>
         <div id="department" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
            <DepartMentBook
               department ="Tech Team"
               image={tech}
               teamMember="Rv, Luv, saksham, rv, vansh, karanm devansh, sdfds, fsdf, fsfsdfs, fsf, sf, sfsfsfsdf, ffsfsfsfsfsdf,"
               head="Unnat"
               description="Department of the Shakesjeer society enables and assists the people to explore in the field of web, UX, UI designing and a lot more. In this Tech- friendly world"
            />
            <DepartMentBook
               department="PR/EM Team"
               image={pr}
               teamMember="Rv, Luv, saksham, rv, vansh, karanm devansh, sdfds, fsdf, fsfsdfs, fsf, sf, sfsfsfsdf, ffsfsfsfsfsdf,"
               head="Unnat"
               description="As a society whose motive is to give a platform for the creative minds of NSUT, it is essential to have a team that promotes the effortless functioning of society and provides a platform for its members."
            />
         </div>
         <div className="dept">
         <DepartMentBook
               department="Graphic Design"
               image={gra}
               teamMember="Rv, Luv, saksham, rv, vansh, karanm devansh, sdfds, fsdf, fsfsdfs, fsf, sf, sfsfsfsdf, ffsfsfsfsfsdf,"
               head="Unnat"
               description="Graphic Design is the most exciting and imaginative field. We have the opportunity to experiment with numerous softwares in order to appeal to various tastes and audiences."
            />
         </div>
         <div id="department" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
         <DepartMentBook
               department="Content Department"
               image={cont}
               teamMember="Rv, Luv, saksham, rv, vansh, karanm devansh, sdfds, fsdf, fsfsdfs, fsf, sf, sfsfsfsdf, ffsfsfsfsfsdf,"
               head="Unnat"
               description="Content Department plays a vital part in the efficient functioning of Shakesjeer - whether be it captions and posts on Social Media handles, Invitations to artists and performers"
            />
            <DepartMentBook
               // style={{marginLeft:"200px"}}
               department="Performers"
               image={performer}
               teamMember="Rv, Luv, saksham, rv, vansh, karanm devansh, sdfds, fsdf, fsfsdfs, fsf, sf, sfsfsfsdf, ffsfsfsfsfsdf,"
               head="Unnat"
               description="The Very Core of an open-mic Society is based on the fact that it's performers are able to put forward their views openly along with exceptional Wit and Satire, so that the audience"
            />
            </div>
         </div>
         <div className="bubbles">
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
  <div className="bubble"></div>
</div>
      </div>
   );
};

export default About;
