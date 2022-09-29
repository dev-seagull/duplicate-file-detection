const { findDuplicates } = require('duplicate-file-finder');

const sourcePath = 'C:/Users/User/Desktop/Data/SecondFile'; 
const searchPaths = ['C:/Users/User/Desktop/Data/FirstFile','C:/Users/User/Desktop/Data/thirdFile']; 
const duplicates = findDuplicates({ sourcePath, searchPaths }).then(duplicates => {
    console.log(duplicates);
});