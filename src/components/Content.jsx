import DropDownMenu from "./DropDownMenu";
import SideMenu from './sidebar/SideMenu.jsx'
import { Personal } from "./content/Personal";
import { ManageEducation, EducationList } from "./content/Education";
import { ManageExperience, ExperienceList } from "./content/Experience";

import { useState } from "react";
import './Content.css'

function Content() {
    //Content States
    const [contentState, setContentState] = useState("")
    const [customState, setCustomState] = useState("")
    const openContent = () =>{
        if(contentState != "toggled") {
            setContentState("toggled");
            setCustomState("")
        }
    }
    const openCustom = () => {
        if(customState != "toggled") {
            setCustomState("toggled");
            setContentState("");
        }
    }
    //Personal States
    const [name,setName] = useState('Matthew Williams');
    const [email,setEmail] = useState('example@hotmail.com');
    const [phone,setPhone] = useState('123-456-7890');
    const [address,setAddress] = useState('123 Fake Street');
    // Education States
    const eduItem = {school:"Umbrella Inc.", degree:"UX & UI Designer", start:"08/2020", end:"present", location:"New York City, US"}
    const [educationList, setEducationList] = useState([eduItem]);
    const [school,setSchool] = useState(eduItem.school);
    const [degree,setDegree] = useState(eduItem.degree);
    const [schoolStart,setSchoolStart] = useState(eduItem.start);
    const [schoolEnd,setSchoolEnd] = useState(eduItem.end);
    const [schoolLocation, setSchoolLocation] = useState(eduItem.location);
    const eduProps =  {school:school, degree:degree, start:schoolStart, end:schoolEnd, location:schoolLocation}
    const eduMethods = {setSchool,setDegree,setStart: setSchoolStart,setEnd: setSchoolEnd,setLocation: setSchoolLocation}
    // Experience States
    const expItem = {company:"Umbrella Inc.", position:"UX & UI Designer", start:"08/2020", end:"present", location:"New York City, US",
    description: "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android"}
    const [experienceList, setExperienceList] = useState([expItem]);
    const [company,setCompany] = useState(expItem.company);
    const [position,setPosition] = useState(expItem.position);
    const [workStart,setWorkStart] = useState(expItem.start);
    const [workEnd,setWorkEnd] = useState(expItem.end);
    const [workLocation, setWorkLocation] = useState(expItem.location);
    const [workDesc, setWorkDesc] = useState(expItem.description);
    const expProps =  {company:company, position:position, start:workStart, end:workEnd, location:workLocation, description: workDesc}
    const expMethods = {setCompany,setPosition,setWorkStart, setWorkEnd, setWorkLocation,setWorkDesc}

    return (
        <>
            <SideMenu openContent={openContent} openEdit={openCustom}>
            </SideMenu>    
            <div className="container">
                <div className={"edits " + contentState}>
                    <DropDownMenu identity={"personal"} text={"Personal Details"}>
                        <p>Full Name</p>
                        <input type="text" placeholder="first and last name..." value={name} onChange={(event) => setName(event.target.value)}/>
                        <p>Email</p>
                        <input type="text" placeholder="email address" value={email} onChange={(event) => setEmail(event.target.value)}/>
                        <p>Phone number</p>
                        <input type="text" placeholder="phone number" value={phone} onChange={(event) => setPhone(event.target.value)}/>
                        <p>Address</p>
                        <input type="text" placeholder="address" value={address} onChange={(event) => setAddress(event.target.value)}/>
                    </DropDownMenu>
                    <DropDownMenu identity={"education"} text={"Education"}>
                        <ManageEducation list={educationList} setList={setEducationList} eduProps={eduProps} eduMethods={eduMethods}>
                        </ManageEducation>
                    </DropDownMenu>
                    <DropDownMenu identity={"experience"} text={"Experience"}>
                        <ManageExperience list={experienceList} setList={setExperienceList} expProps={expProps} expMethods={expMethods}>
                        </ManageExperience>
                    </DropDownMenu>
                </div>
                <div className="content">
                    <Personal name= {name} email={email} phone={phone} address={address}>
                    </Personal>
                    <EducationList educationList={educationList}>
                    </EducationList>
                    <ExperienceList experienceList={experienceList}>
                    </ExperienceList>
                </div>
            </div>
        </>
    )
}

export default Content;