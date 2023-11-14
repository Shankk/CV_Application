import './SideMenu.css'

function SideMenu({openContent, openEdit}) {
    return (
        <div className="sideMenu">
            <h1>CV Builder</h1>
            <button id='Content' onClick={openContent}>Content</button>
            <button id='Customize' onClick={openEdit}>Customize</button>
        </div>
    )
    
}

export default SideMenu;