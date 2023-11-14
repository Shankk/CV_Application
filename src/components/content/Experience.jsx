import { useState } from "react";
import { v4 as uuid } from "uuid";

function Experience({company = "", position = "",
    start = "", end = "", location = "", description = ""}) {

    const experienceStyle = {
        color: "red",
        fontSize: 12
    };

    return (
        <div className="experienceContentItem">
            <div className="contentItemGroup">
                <p>{start} - {end} </p>
                <p>{location}</p>
            </div>
            <div className="contentItemGroup">
                <p>{company}</p>
                <p>{position}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

function ExperienceList(props) {
    if(!props.experienceList) {
        return (
            <div className="experienceContent">
                <h3 className="contentSection">Experience</h3>
                <p>Trying to fetch Experience...</p>
            </div>
        )
    }

    if(props.experienceList.length === 0) {
        return (
            <div className="experienceContent">
                <h3 className="contentSection">Experience</h3>
                <p>No Experience has been added. It is reccomended to add some!</p>
            </div>
        )
    }

    return (
        <div className="experienceContent">
            <h3 className="contentSection">Experience</h3>
            {props.experienceList.map((item,i) => {
                return <Experience key={i} company={item.company} position={item.position} 
                start={item.start} end={item.end} location={item.location} description={item.description} />;
            })}
        </div>
    )
}

function ManageExperience({list, setList, expProps, expMethods}) {
    const [expand, setExpand] = useState(false)
    const [index, setIndex] = useState(0)
    const [oldInput, setOldInput] = useState("")
    const [isNew, setNew] = useState(false)
    
    if(list.length > 0){
        //Updates List with input data
        list[index].company = expProps.company
        list[index].position = expProps.position
        list[index].start = expProps.start
        list[index].end = expProps.end
        list[index].location = expProps.location
        list[index].description = expProps.description
    }
    const resetInputs = () => {
        expMethods.setCompany("")
        expMethods.setPosition("")
        expMethods.setWorkStart("")
        expMethods.setWorkEnd("")
        expMethods.setWorkLocation("")
        expMethods.setWorkDesc("")
    }
    const loadInputs = (array,index) => {
        //offset to allow copy of data ahead or behind in list.
        let oldData = ""
        if(index >= array.length) {
            array.filter((item,i) => {
                if(i == (index-1)) {
                    oldData = {company:item.company, position:item.position, start:item.start,
                         end:item.end, location:item.location, description:item.description}
                    expMethods.setCompany(item.company)
                    expMethods.setPosition(item.position)
                    expMethods.setWorkStart(item.start)
                    expMethods.setWorkEnd(item.end)
                    expMethods.setWorkLocation(item.location)
                    expMethods.setWorkDesc(item.description)
                } 
            })
            setIndex(array.length-1)
        }
        else {
            array.filter((item,i) => {
                if(i == index) {
                    oldData = {company:item.company, position:item.position, start:item.start,
                         end:item.end, location:item.location, description:item.description}
                    expMethods.setCompany(item.company)
                    expMethods.setPosition(item.position)
                    expMethods.setWorkStart(item.start)
                    expMethods.setWorkEnd(item.end)
                    expMethods.setWorkLocation(item.location)
                    expMethods.setWorkDesc(item.description)
                } 
            })
            setIndex(index)
        }
        return oldData
    }
    const handleNew = () => {
        //Setup for New Item. we open inputs. push temp item in list.
        setExpand(true)
        setNew(true)
        resetInputs()
        let tempArr = list
        tempArr.push(expProps)
        setList(tempArr)
        setIndex((list.length-1))
    }
    const handleOld = (index) => {
        //Setup for Existing Item. Loading existing data from list.
        setOldInput(loadInputs(list,index))
        setExpand(true);
        setNew(false);
    }
    const handleSave = () => {
        setExpand(false)
        setNew(false)
    }
    const handleDelete = () => {
        // We first filter the item we want to delete from the list
        let temp = list.filter((item, i) => i !== index);
        // Since List is shifted of the deleted item. we grab the newly indexed data
        // to overwrite the current saved data we just deleted.
        // Reason because is that once we re-render. the index we were on will try to load
        // the current state data when we decide to edit one of our list items.
        loadInputs(temp,index)
        setList(temp)
        setExpand(false);
    }
    const handleCancel = () => {
        if(isNew == true) { // if new Item. just delete.
            let temp = list.filter((item, i) => i !== index);
            loadInputs(temp,index)
            setList(temp)
        }
        else {
            expMethods.setCompany(oldInput.company)
            expMethods.setPosition(oldInput.position)
            expMethods.setWorkStart(oldInput.start)
            expMethods.setWorkEnd(oldInput.end)
            expMethods.setWorkLocation(oldInput.location)
            expMethods.setWorkDesc(oldInput.description)
        }
        setExpand(false);
        
    }
    
    if(expand) {
        return (
            <>
                <p>Company Name</p>
                <input type="text" name="school" value={expProps.company} onChange={(event) => expMethods.setCompany(event.target.value)}/>
                <p>Position Title</p>
                <input type="text" name="degree" value={expProps.position} onChange={(event) => expMethods.setPosition(event.target.value)}/>
                <p>Start</p>
                <input type="text" name="start_date" value={expProps.start} onChange={(event) => expMethods.setWorkStart(event.target.value)}/>
                <p>End</p>
                <input type="text" name="end_date" value={expProps.end} onChange={(event) => expMethods.setWorkEnd(event.target.value)}/>
                <p>Location</p>
                <input type="text" name="location" value={expProps.location} onChange={(event) => expMethods.setWorkLocation(event.target.value)}/>
                <p>Description</p>
                <input type="text" name="location" value={expProps.description} onChange={(event) => expMethods.setWorkDesc(event.target.value)}/>
                <div>
                    <button onClick={() => handleDelete()}>Delete</button>
                    <button onClick={() => handleCancel()}>Cancel</button>
                    <button onClick={() => handleSave()}>Save</button>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                {list.length > 0 && list.map((item, i) => {
                    return <button key={i} onClick={() => handleOld(i)}>{item.company}</button>
                })}
                <button onClick={handleNew}>Add New Experience</button>
            </>
        )
    } 
}

export {ManageExperience, ExperienceList}