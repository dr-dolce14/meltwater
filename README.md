# Meltwater Assignment

An SPA that:
- accepts an uploaded plain text document
- redacts words from that text document (based on keywords passed into the redacting function)
- outputs to the screen the document text with "XXX" in place of any keywords found in the document.




# To run the React App
- 'npm install'
- 'npm start'
    - Runs the app in development mode (can be viewed in the browser at http://localhost:3000)



## Example 
- file (needs to be in plain text format):
[Meltwater.txt](https://github.com/dr-dolce14/meltwater/files/6290340/Meltwater.txt)

<img width="695" alt="Screen Shot 2021-04-10 at 1 15 29 PM" src="https://user-images.githubusercontent.com/60359533/114278679-e9e87280-99fe-11eb-92f4-b0f6b20e75e3.png">

- keywords provided in function:  'Hello world "boston red sox", "Pepperoni Pizza" "Cheese Pizza,", beer, here, redact'

- Ouput:

![Screen Shot 2021-04-10 at 1 15 01 PM](https://user-images.githubusercontent.com/60359533/114278765-49468280-99ff-11eb-8ba5-d8e0178c6493.png)




### Limitations (that I know of at the moment)
- have not accounted for carriage returns in original plain text document.
- could not account for single quotes around phrases if those phrases were included in a string.
- cannot figure out how to replace punctuation if it is removed along with a redacted word.
- keywords passed into the function, so assuming I am provided with a list of keywords as the engineer that I can input into the code; with more time, I was thinking of adding an input form for keywords and storing them in a backend. That data can then be fetched and passed into the function whenever a document is uploaded.
