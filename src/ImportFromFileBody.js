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

    const redactThis = (text) => {
        let keywords = " \"sample\",\"redact\",\"us\" "
        let omg = keywords.replace(/"([^"]+(?="))"/g, '$1').trim()
        let holycow = omg.split(",")
        let thing = text.split(" ")
            for (let i = 0; i < thing.length; i++) {
                for (let j = 0; j < holycow.length; j++) {
                    if (holycow[j] === thing[i]) {
                    thing[i] = "XXX"   
                    }         
      
                }
            }
            return thing.join(" ")
    }
    
    return <div className='upload-expense'>
      <input
        type='file'
        id='file'
        className='input-file'
        accept='.txt'
        onChange={e => handleFileChosen(e.target.files[0])}
      />
      <p>{redactThis(text)}</p>
    </div>;
  };

  export default ImportFromFileBody;