import "./home.scss"
import gee from "./human.png"

export default function Home() {
    return(
        <div className="home" id="home">
            <div className="left">
                <div className="imgContainer">
                    <img src={gee} alt="" />    
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>Hello I am Nurul</h1>
                    <h4>"I believe no one has become poor by giving"</h4>
                    
                </div>
            </div>
    
         
        </div>
    )
}