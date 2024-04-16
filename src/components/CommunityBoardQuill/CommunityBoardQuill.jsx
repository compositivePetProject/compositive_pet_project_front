import { View, Text } from 'react-native'
import React from 'react'
import ReactQuill from 'react-quill'

 function CommunityBoardQuill() {

    const modules = {
        toolbar: 
        
        [
            ['bold', 'italic', 'underline', 'strike'],       
            ['blockquote', 'code-block'],
            ['link', 'image', 'video', 'formula'],
        
            [{ 'header': 1 }, { 'header': 2 }],               
            [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      
            [{ 'indent': '-1'}, { 'indent': '+1' }],          
            [{ 'direction': 'rtl' }],                         
        
            [{ 'size': ['small', false, 'large', 'huge'] }],  
            [{ 'color': [] }, { 'background': [] }],         
            [{ 'font': [] }],
            [{ 'align': [] }],
        
            ['clean']  

        ]
    }

    const handleQuillChange = (value) => {

    } 

  return (
    <>
      <ReactQuill modules={modules} onChange={handleQuillChange}/>
    </>
  )
}

export default CommunityBoardQuill