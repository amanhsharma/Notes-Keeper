import React, { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Input from './components/Input'
import Footer from './components/Footer'


const App = () => {
  const [notes, setNotes] = useState([]);
  const getData = (title, content) => {
    const newNote = {title, content};
    setNotes([...notes, newNote]);
  }
  const handleDelete = (index) => {
    const newNotes = notes.filter((_,idx) => idx!== index);
    setNotes(newNotes);
  }
  return (
    <>
      <div className='bg-white h-screen flex flex-col justify-between'>
        <Navbar/>
        <h3 className='flex justify-center items-center font-poppins text-3xl pt-10 text-gray-700 font-extralight
        '>Hey there, start taking you notes</h3>
        <Input onAddNote={getData}/>
        <div className='flex flex-wrap gap-3 p-10'>
          {notes.map((note, idx) => {
            return(
              <Card key={idx} title={note.title} content={note.content} onDelete={() => {
                handleDelete(idx);
              }}/>
            );
          })}
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
