import React, { useState, useEffect } from 'react';
import './App.css'; // Asegúrate de importar tu hoja de estilos aquí

import NoteList from './NoteList';
import NoteEditor from './NoteEditor';

function App() {
  // Obtener las notas almacenadas en el localStorage al cargar la página
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  const [notes, setNotes] = useState(savedNotes);
  const [searchTerm, setSearchTerm] = useState('');

  // Actualizar el localStorage cada vez que cambian las notas
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  return (
    <div className="app">
      <h1>NOTAS</h1>
      <NoteEditor addNote={addNote} />
      <input
        type="text"
        id="searchTerm"
        placeholder="Buscar notas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="notes-container">
        <NoteList
          notes={notes}
          searchTerm={searchTerm}
          deleteNote={deleteNote}
          setNotes={setNotes}
        />
      </div>
    </div>
  );
}

export default App;
