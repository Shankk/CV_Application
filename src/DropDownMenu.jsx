import { useState } from 'react';

function DropDownMenu(props) {
    const [dropState, setDropState] = useState("");
    function handleDrop() {
        if(dropState != "toggled") setDropState("toggled");
        else setDropState("");
    }

    return (
        <>
            <button id={props.identity} onClick={handleDrop}>{props.text}</button>
            <div className={(props.identity + "Items ") + dropState} id='dropDown'>
                {props.children}
            </div>
        </>
    );

}

export default DropDownMenu;