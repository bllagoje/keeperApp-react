import React from "react";


function Note(props) {
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button>DELETE</button>
        </div>
    );
}

export default Note;

// <h1>Title</h1>
// <p>Content</p>