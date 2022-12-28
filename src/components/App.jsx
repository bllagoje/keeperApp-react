import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

// import notes from "./notes";


function App() {
    const [notes, setNotes] = useState([]);


    function addNote(note) {
        // console.log(note);
        setNotes(prevNotes => {
            return [...prevNotes, note];
        });

    };

    // ------------------------------------------------------------------------------------------
    return(
        <div>
            <Header />
            <CreateArea 
                onAdd={addNote}
            />
            {notes.map((noteItem) => {
            return (
                <Note 
                    title={noteItem.title} 
                    content={noteItem.content}
                />
            )
            })}
            {/* <Note key={1} title="Note title" content="Note content" /> */}
            <Footer />
        </div>
    );
}

export default App;