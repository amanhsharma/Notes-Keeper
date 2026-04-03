import React,{useState} from 'react'

const Input = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if(title.trim() === '' && content.trim() === ''){
        alert("Please enter title or content");
        return;
      }
      props.onAddNote(title, content);
      setTitle('');
      setContent('');
    }
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-190'>
        <input value={title} type="text"  className='border-1 border-gray-400 p-3 m-3 focus:outline-none text-gray-500' placeholder='Enter title' onChange={(e) => {
          setTitle(e.target.value);
        }}/>
      <textarea value={content} className='border-1 border-gray-400 m-3 p-3 focus:outline-none resize-none text-gray-500' placeholder='Enter details' onChange={(e) => {
        setContent(e.target.value);
      }}></textarea>
      <button onClick={handleSubmit} className='bg-blue-600 text-white px-7 py-3 rounded-xl cursor-pointer hover:bg-blue-800 transition '>Add Note</button>
      </div>
    </div>
  )
}

export default Input
