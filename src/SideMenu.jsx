import DropDownMenu from './DropDownMenu';
import './SideMenu.css'

function SideMenu() {
    return (
        <div className="sideMenu">
            <h1>CV Builder</h1>
            <DropDownMenu identity={"content"} text={"Content"}>
                <button id='Clear'>Clear Resume</button>
                <button id='Example'>Load Example</button>
            </DropDownMenu>
            <DropDownMenu identity={"edit"} text={"Edit"}>
                <button id='Layout'>Layout</button>
                <button id='Color'>Color</button>
                <button id='Fonts'>Fonts</button>
            </DropDownMenu>
        </div>
    )
    
}

export default SideMenu;