import React, { useState } from 'react'

const ImportFromFileBody = () => {
    const [text, setText] = useState("");
    let fileReader;
    
    const handleFileRead = (e) => {
      const content = fileReader.result;
      setText(content)
    };
    
    const handleFileChosen = (file) => {
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    };

    function removeSpaces(s) {
      let inside = 0;
      return s.replace(/ +|"/g, m => m === '"' ? (inside ^= 1, '"') : inside ? m : '|' );
      }

    const redactThis = (text) => {
      //first redacts all single matching words, then redacts all phrases through replace regex function 
        let keywords = 'Hello world "boston red sox", "Pepperoni Pizza" "Cheese Pizza,", beer, here, redact'
        let oneWordArray = []
        let twoWordArray = []

        let result = removeSpaces(keywords)
  
        let newArr = result.match(/(?:[^\\|]|\\[\s\S])+/g)

        newArr.map(x => {            
          let eachWord=x.replace(/"([^"]+(?="))"/g,'$1')
          if (/\s/.test(eachWord)) {
            // this checks for phrases by checking for white spaces in words (.test is a boolean value)

            let word = eachWord.replace(',', '')
            //push phrases into twoWordArray
            //remove extra commas do one extra step in case comma is like "cheese pizza,"
            twoWordArray.push(word.replace(',',''))
          }else{
            //push one words into oneWordArray 
            oneWordArray.push(eachWord)
          }
        })     
        
        let docArray = text.split(" ")
            for (let i = 0; i < docArray.length; i++) {
                for (let j = 0; j < oneWordArray.length; j++) {
                  //check first if doc has any matching one words from one word array, remove punctuation to check
                    if (oneWordArray[j].toLowerCase().replace(/[.,''\/#!$%\^&\*;:{}=\-_`~()]/g,"") === docArray[i].toLowerCase().replace(/[.,''\/#!$%\^&\*;:{}=\-_`~()]/g,"")) {
                    docArray[i] = "XXX"
                    }         
                }
            }
            
        const result2WordArray = twoWordArray.toString().replace(/(\||,)/g, "|")
        //result2WordArray will take phrase array replace all commas with pipes for regex match in lastStr  

        let lastStr = docArray.join(" ").replace(new RegExp(result2WordArray, 'gi'), (match) => { 
          //uses the replace function to match regex phrases and return redacted phrase
          return match = "XXX";
        });
      return lastStr
         
    }
    
    return <div className='upload-expense'>
      <input
        type='file'
        id='file'
        className='input-file'
        accept='.txt'
        onChange={e => handleFileChosen(e.target.files[0])}
      />
      <h3>REDACTED TEXT:</h3>
      <p>{redactThis(text)}</p>
    </div>;
  };

  export default ImportFromFileBody;