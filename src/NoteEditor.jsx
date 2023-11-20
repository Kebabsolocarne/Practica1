// NoteEditor.jsx

import React, { useState } from 'react';
import './css/NoteEditor.css';

function NoteEditor({ addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNote = () => {
    if (title && content) {
      const newNote = {
        id: Date.now(),
        title,
        content,
      };
      addNote(newNote);
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="note-editor">
      <h2>Añadir Nota</h2>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Contenido"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button id="Click" onClick={handleAddNote} className="save-button">
        Guardar Nota
      </button>
    </div>
  );
}

export default NoteEditor;
