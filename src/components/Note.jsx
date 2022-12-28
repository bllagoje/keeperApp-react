import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    };

    // ------------------------------------------------------------------------------------------
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>
                <DeleteForeverIcon />
            </button>
            {/* <button onClick={handleClick}>DELETE</button> */}
        </div>
    );
}

export default Note;

// <h1>Title</h1>
// <p>Content</p>