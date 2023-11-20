// Note.jsx

import React from 'react';
import './css/Note.css';

function Note({ note, deleteNote }) {
  return (
    <div className="note">
      <div className="note-content">
        <h3>{note.title}</h3>
        <p>{note.content}</p>
      </div>
      <button className="delete-button" onClick={() => deleteNote(note.id)}>
        &#10006; {/* Utiliza el carácter '×' para representar la cruz */}
      </button>
    </div>
  );
}

export default Note;
