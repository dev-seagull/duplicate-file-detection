const { findDuplicates } = require('duplicate-file-finder');
const prompt = require('prompt-sync')();


const sourcePath = prompt('Enter the sourcePath:');
const numOfSearchPaths = Number(prompt('Enter the number of search path:'));
const searchPaths = [];


for(let num = 0; num < numOfSearchPaths; num++){
    searchPaths[num] = prompt("Enter the search path: ")
}

 
//const searchPaths = ['C:/Users/User/Desktop/Data/FirstFile','C:/Users/User/Desktop/Data/thirdFile']; 
const duplicates = findDuplicates({ sourcePath, searchPaths }).then(duplicates => {
    console.log(duplicates);
});