function retrieveNote(){
    var i, 
        currentNote = "",
        notesArray = [];
    //get notes from storage
    notesArray = localStorage.getItem("textinput");
    //the array came bak as a string so I had to parse it by character
    for(i = 0; i < notesArray.length; i++){
        //check if the current character is a comma
        if(notesArray[i] == ","){
            //if so add the note to the list
            addLineItem(currentNote);
            currentNote = ""; //clear out the old note before moving on
        }
        else if (i == notesArray.length - 1){
            //if we've reached the end then add the last character
            currentNote += notesArray[i];
            //then add the last note to the list
            addLineItem(currentNote);
        }
        else{
            //concatenate the current character to the note
            currentNote += notesArray[i];
        }
    }
}
function addLineItem(note){
    
    var listnode = document.getElementById('notes-list'),//store the ordered list parent
        lineItem = document.createElement("li"), //create and store a line item
        txtNode = document.createTextNode(note); // use the argument to creat text
    lineItem.appendChild(txtNode); //append text to new line item
    listnode.appendChild(lineItem); // append the line item to the ordered list parent
}