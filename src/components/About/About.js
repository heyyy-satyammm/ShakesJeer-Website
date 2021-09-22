import React from "react";
import '../../style/about.css'
import logo from '../../Assest/logo.png'
import HoneyBlock from './HoneyBlock'
import DepartMentBook from "./DepartMentBook";

const About = () => {

   return (
      <div data-aos="fade-up" data-aos-offset="20">
         <div id="section_logo">
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
            <h1 className="our_team" style={{fontSize:"36px"}}>Our Team</h1>
            {/* <hr style={{ marginBottom: "50px" }}/> */}
            <div className="honey">


               {/* <!--col div--> */}
               <div className="comb_0">
                  <HoneyBlock name="divya" position="head" image={logo} />
               </div>

               {/* <!--col div--> */}
               <div className="comb_1">
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />
               </div>
               {/* <!--col div--> */}
               <div className="comb_2">
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />

               </div>
               {/* <!--col div--> */}
               <div className="comb_3">
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />
                  <HoneyBlock name="divya" position="head" image={logo} />
               </div>
               {/* <!--col div--> */}
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
         <h1 style={{fontSize:"36px"}} data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">Departments</h1>
         {/* <hr /> */}
         <div id="department" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
            <DepartMentBook
               department ="Tech Team"
               teamMember="Rv, Luv, saksham, rv, vansh, karanm devansh, sdfds, fsdf, fsfsdfs, fsf, sf, sfsfsfsdf, ffsfsfsfsfsdf,"
               head="Unnat"
               description="Department of the Shakesjeer society enables and assists the people to explore in the field of web, UX, UI designing and a lot more. In this Tech- friendly world, 
                           it is important to bow and care for the seed of interest in the tech field. The main aim of the society is to provide a subtle platform to the aspirants of the fields stated.
                           Tech team connects the social real world with the society virtually.
                           Shakesjeer is grateful for the Tech- team that is working consistently to help the students develop in the tech field."
            />
            <DepartMentBook
               department="PR/EM Team"
               teamMember="Rv, Luv, saksham, rv, vansh, karanm devansh, sdfds, fsdf, fsfsdfs, fsf, sf, sfsfsfsdf, ffsfsfsfsfsdf,"
               head="Unnat"
               description="As a society whose motive is to give a platform for the creative minds of NSUT, it is essential to have a team that promotes the effortless functioning of society and provides a platform for its members. 
               Our belief here is to bring people with us and the PR/EM team assists in the collaboration of various departments of ShakesJeer , so our talents do not have to worry about anything other than being at the pinnacle of their creative powers. 
               These hard-working peeps also pull strings behind the scenes to organize and manage various events and endeavors that ShakesJeer picks up, striving forward for the success and improvement of our society."
            />
            <DepartMentBook
               department="Graphic Design"
               teamMember="Rv, Luv, saksham, rv, vansh, karanm devansh, sdfds, fsdf, fsfsdfs, fsf, sf, sfsfsfsdf, ffsfsfsfsfsdf,"
               head="Unnat"
               description="Graphic Design is the most exciting and imaginative field. We have the opportunity to experiment with numerous softwares in order to appeal to various tastes and audiences. It majorly contributes to the viewer's first impression of anything we release. This department perfectly balances the fun part and the learning part. From generating a simple Instagram post on Canva to editing a full-length video on Premiere Pro, everything is truly an amazing experience, especially with our quirky team members onboard!"
            />
            <DepartMentBook
               department="Content Department"
               teamMember="Rv, Luv, saksham, rv, vansh, karanm devansh, sdfds, fsdf, fsfsdfs, fsf, sf, sfsfsfsdf, ffsfsfsfsfsdf,"
               head="Unnat"
               description="Content Department plays a vital part in the efficient functioning of Shakesjeer - whether be it captions and posts on Social Media handles, Invitations to artists and performers to participate in our events, or compiling our very own magazine of the name Shakesjournal! We have avid writers on board who harness all their capabilities and strengths into a piece of paper, covering a wide range of topics. If you stumble upon on some concise and quality content, it's a high chance that it was written by our content team!"
            />
            <DepartMentBook
               style={{marginLeft:"200px"}}
               department="Performers"
               teamMember="Rv, Luv, saksham, rv, vansh, karanm devansh, sdfds, fsdf, fsfsdfs, fsf, sf, sfsfsfsdf, ffsfsfsfsfsdf,"
               head="Unnat"
               description="The Very Core of an open-mic Society is based on the fact that it's performers are able to put forward their views openly along with exceptional Wit and Satire, so that the audience connects with them. 
               Shakesjeer is fortunate to have a team comprising of all these qualities and many more whose remarkable talent is sure to make your open-mic experience with us a memorable one."
            />
         </div>

      </div>
   );
};

export default About;
