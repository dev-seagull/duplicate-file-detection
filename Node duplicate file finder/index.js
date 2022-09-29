const { findDuplicates } = require('duplicate-file-finder');
const prompt = require('prompt-sync')();
const fs = require('fs');


const sourcePath = prompt('Enter the sourcePath:');
const numOfSearchPaths = Number(prompt('Enter the number of search path:'));
const searchPaths = [];


for(let num = 0; num < numOfSearchPaths; num++){
    searchPaths[num] = prompt("Enter the search path: ")
}

  
const duplicates = findDuplicates({ sourcePath, searchPaths }).then(duplicates => {
    let result = duplicates.map(row => {
        return row.join(",");
    })
    console.log(result);
    result = JSON.stringify(result);
    fs.writeFile("duplicatedFiles.json", result, (err) => {
        if (err) 
        console.log("An error occured while writing JSON Object to File.");
        else {
        console.log("Duplicated files has been saved.");
        } 
      });
});

// C:/Users/User/Desktop/Data

//let rowsAsString = data.map(row => {
//    return row.join(",");
//})

//console.log(rowsAsString)