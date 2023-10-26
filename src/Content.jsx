import DropDownMenu from "./DropDownMenu";
import './Content.css'

function Content() {
    return (
        <div className="container">
            <div className="edits">
                <DropDownMenu identity={"personal"} text={"Personal Details"}>
                    <p>Full Name</p>
                    <input type="text" />
                    <p>Email</p>
                    <input type="email" />
                    <p>Phone number</p>
                    <input type="number" />
                    <p>Address</p>
                    <input type="text" />
                </DropDownMenu>
                <DropDownMenu identity={"education"} text={"Education"}>
                    <p>School</p>
                    <input type="text" />
                    <p>Degree</p>
                    <input type="text" />
                    <div>
                        <p>Start Date</p>
                        <input type="date" />
                        <p>End Date</p>
                        <input type="date" />
                    </div>
                    <p>Location</p>
                    <input type="text" />
                </DropDownMenu>
                <DropDownMenu identity={"experience"} text={"Experience"}>
                    <p>Company Name</p>
                    <input type="text" />
                    <p>Position Title</p>
                    <input type="text" />
                    <div>
                        <p>Start Date</p>
                        <input type="date" />
                        <p>End Date</p>
                        <input type="date" />
                    </div>
                    <p>Location</p>
                    <input type="text" />
                    <p>Description</p>
                    <input type="text" />
                </DropDownMenu>
            </div>
            <div className="content">
                <h1>Brian Viveiros</h1>
            </div>
        </div>
    )
}




export default Content;