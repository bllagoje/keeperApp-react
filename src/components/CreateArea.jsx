import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Fab from "@material-ui/core/fab";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        let {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    };

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        // Prevent Default:
        event.preventDefault(); 
    };

// ------------------------------------------------------------------------------------------
  return (
    <div>
      <form>
        <input 
            name="title" 
            placeholder="Title"
            onChange={handleChange} 
            value={note.value}
        />
        <textarea 
            name="content" 
            placeholder="Take a note..." 
            rows="3"
            onChange={handleChange}
            value={note.content}
        />
        <Fab onClick={submitNote}>
            <AddCircleIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;