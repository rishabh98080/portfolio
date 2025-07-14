import './Comment.css'
import image from './assets/send-message.png'
function Comment(){
    return(
        <>
        <div className = "comment-section">
            <input  placeholder="Name" className= "Name"/><br/>
            <input placeholder="Email" className= "email"/><br/>
            <input placeholder="Comment here..." class = "comment"></input><br></br><br></br><br></br>
            <img src={image} className="button-image send-icon" alt="Send" role="button" tabIndex={0} onClick={() => {/* send action here */}} />
        </div>
        </>
    )
}
export default Comment 