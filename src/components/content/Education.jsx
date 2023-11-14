import { useState } from "react";
import { v4 as uuid } from "uuid";

function Education({school = "",degree = "",
    start = "", end = "", location = ""}) {

    const educationStyle = {
        color: "red",
        fontSize: 12
    };

    return (
        <div className="educationContentItem">
            <div className="contentItemGroup">
                <p>{start} - {end} </p>
                <p>{location}</p>
            </div>
            <div className="contentItemGroup">
                <p>{school}</p>
                <p>{degree}</p>
            </div>
        </div>
    )
}

function EducationList(props) {
    if(!props.educationList) {
        return (
            <div className="educationContent">
                <h3 className="contentSection">Education</h3>
                <p>Trying to fetch Education...</p>
            </div>
        )
    }

    if(props.educationList.length === 0) {
        return (
            <div className="educationContent">
                <h3 className="contentSection">Education</h3>
                <p>No Education has been added. It is reccomended to add some!</p>
            </div>
        )
    }

    return (
        <div className="educationContent">
            <h3 className="contentSection">Education</h3>
            {props.educationList.map((education,i) => {
                return <Education key={i} school={education.school} degree={education.degree} 
                start={education.start} end={education.end} location={education.location} />;
            })}
        </div>
    )
}

function ManageEducation({list, setList, eduProps, eduMethods}) {
    const [expand, setExpand] = useState(false)
    const [index, setIndex] = useState(0)
    const [oldInput, setOldInput] = useState("")
    const [isNew, setNew] = useState(false)
    
    if(list.length > 0){
        //Updates List with input data
        list[index].school = eduProps.school
        list[index].degree = eduProps.degree
        list[index].start = eduProps.start
        list[index].end = eduProps.end
        list[index].location = eduProps.location
    }
    const resetInputs = () => {
        eduMethods.setSchool("")
        eduMethods.setDegree("")
        eduMethods.setStart("")
        eduMethods.setEnd("")
        eduMethods.setLocation("")
    }
    const loadInputs = (array,index) => {
        //offset to allow copy of data ahead or behind in list.
        let oldData = ""
        if(index >= array.length) {
            array.filter((item,i) => {
                if(i == (index-1)) {
                    oldData = {school:item.school, degree:item.degree, start:item.start, end:item.end, location:item.location}
                    eduMethods.setSchool(item.school)
                    eduMethods.setDegree(item.degree)
                    eduMethods.setStart(item.start)
                    eduMethods.setEnd(item.end)
                    eduMethods.setLocation(item.location)
                } 
            })
            setIndex(array.length-1)
        }
        else {
            array.filter((item,i) => {
                if(i == index) {
                    oldData = {school:item.school, degree:item.degree, start:item.start, end:item.end, location:item.location}
                    eduMethods.setSchool(item.school)
                    eduMethods.setDegree(item.degree)
                    eduMethods.setStart(item.start)
                    eduMethods.setEnd(item.end)
                    eduMethods.setLocation(item.location)
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
        tempArr.push(eduProps)
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
            eduMethods.setSchool(oldInput.school)
            eduMethods.setDegree(oldInput.degree)
            eduMethods.setStart(oldInput.start)
            eduMethods.setEnd(oldInput.end)
            eduMethods.setLocation(oldInput.location)
        }
        setExpand(false);
        
    }
    
    if(expand) {
        return (
            <>
                <p>School</p>
                <input type="text" name="school" value={eduProps.school} onChange={(event) => eduMethods.setSchool(event.target.value)}/>
                <p>Degree</p>
                <input type="text" name="degree" value={eduProps.degree} onChange={(event) => eduMethods.setDegree(event.target.value)}/>
                <p>Start</p>
                <input type="text" name="start_date" value={eduProps.start} onChange={(event) => eduMethods.setStart(event.target.value)}/>
                <p>End</p>
                <input type="text" name="end_date" value={eduProps.end} onChange={(event) => eduMethods.setEnd(event.target.value)}/>
                <p>Location</p>
                <input type="text" name="location" value={eduProps.location} onChange={(event) => eduMethods.setLocation(event.target.value)}/>
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
                    return <button key={i} onClick={() => handleOld(i)}>{item.school}</button>
                })}
                <button onClick={handleNew}>Add New Education</button>
            </>
        )
    } 
}

export {ManageEducation,EducationList}