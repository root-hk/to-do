import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        });
        event.preventDefault();
    }

    function expand() {
        setIsExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                <input
                    name="title"
                    onClick={expand}
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />
                {isExpanded ? (
                    <textarea
                        name="content"
                        onChange={handleChange}
                        value={note.content}
                        placeholder="Take a note..."
                        rows="3"
                    />
                ) : null}

                <Zoom in={isExpanded ? true : false}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
