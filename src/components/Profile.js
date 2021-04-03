import React from "react";

class Profile extends React.Component {
    render() {
        return (
            <div> 
                <div className = "container"> 
                    <div className = "face"> 
                        <img src = {this.props.photoSource} />  
                    </div>
                
                    <div className = "text"> 
                        <h1 className="headline"> {this.props.name} </h1>
                        <p className="quote"> Rating: {this.props.rating} </p>
                    </div>
                </div>

            </div>
            
        );
    }
}

export default Profile;


