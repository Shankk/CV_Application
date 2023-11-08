import DropDownMenu from "./DropDownMenu";
import { ManageEducation, EducationList } from "./Education";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import './Content.css'
function Personal({name = "Brian Viveiros",email = "coolman123@gmail.com",
    phone = "123-456-7890",address = "123 Fake Street"}) {

    const personalStyle = {
        color: "red",
        fontSize: 12
    };

    return (
        <div className="personalContent">
            <h1>{name}</h1>
            <p>{email} {phone} {address}</p>
        </div>
    )
}

function Content() {
    //Personal States
    const [name,setName] = useState('Matthew Williams');
    const [email,setEmail] = useState('example@hotmail.com');
    const [phone,setPhone] = useState('123-456-7890');
    const [address,setAddress] = useState('123 Fake Street');
    
    // Education States
    const [educationList, setEducationList] = useState([]);
    const [school,setSchool] = useState('');
    const [degree,setDegree] = useState('');
    const [start,setStart] = useState('');
    const [end,setEnd] = useState('');
    const [location, setLocation] = useState('');
    
    const eduProps =  {school:school, degree:degree, start:start, end:end, location:location}
    const eduMethods = {setSchool,setDegree,setStart,setEnd,setLocation}

    return (
        <div className="container">
            <div className="edits">
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
                    <p>Company Name</p>
                    <input type="text" />
                    <p>Position Title</p>
                    <input type="text" />
                    <p>Start Date</p>
                    <input type="text" />
                    <p>End Date</p>
                    <input type="text" />
                    <p>Location</p>
                    <input type="text" />
                    <p>Description</p>
                    <input type="text" />
                </DropDownMenu>
            </div>
            <div className="content">
                <Personal name= {name} email={email} phone={phone} address={address}>
                </Personal>
                <EducationList educationList={educationList}>
                </EducationList>
            </div>
        </div>
    )
}

export default Content;