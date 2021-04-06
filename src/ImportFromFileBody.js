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
        let keywords = 'sample, redact, "of", us'
        let stringReplace = keywords.replace(/"([^"]+(?="))"/g,'$1').trim()
        let badArray = stringReplace.split(", ")
        let docArray = text.split(" ")
            for (let i = 0; i < docArray.length; i++) {
                for (let j = 0; j < badArray.length; j++) {
                    if (badArray[j] === docArray[i]) {
                    docArray[i] = "XXX"   
                    }         
      
                }
            }
            return docArray.join(" ")
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