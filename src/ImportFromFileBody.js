import React, { useState } from 'react'

const ImportFromFileBody = () => {
    const [text, setText] = useState("");
    let fileReader;
    
    const handleFileRead = (e) => {
      const content = fileReader.result;
      console.log(content)
      // do something with the 'content'
      setText(content)
      
    };
    
    const handleFileChosen = (file) => {
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    };
    
    return <div className='upload-expense'>
      <input
        type='file'
        id='file'
        className='input-file'
        accept='.txt'
        onChange={e => handleFileChosen(e.target.files[0])}
      />
      <p>{text}</p>
    </div>;
  };

  export default ImportFromFileBody;