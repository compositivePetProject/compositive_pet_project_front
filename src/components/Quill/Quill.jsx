import React from 'react';
import ReactQuill from 'react-quill';

function Quill({value, onChange, ref}) {
    const modules = {
        toolbar : [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            ['bold', 'italic', 'underline', 'strike'],        
            [{ 'color': [] }, { 'background': [] }],          
            [{ 'align': [] }],
            ['blockquote', 'code-block'],
            ['link', 'image', 'video', 'formula'],
            
            [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
            [{ 'indent': '-1'}, { 'indent': '+1' }],                                                    
        ]
    }
    return (
        <ReactQuill 
        modules={modules} 
        onChange={onChange} 
        ref={ref} 
        style={{
            width: "100%",
            marginBottom: "50px",
            height: "700px"
        }}
        value={value}
        />
    );
}

export default Quill;