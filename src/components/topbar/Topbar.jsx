import "./topbar.scss"

export default function Topbar(){
    return(
        <div className="topbar" id="topbar">
            <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}