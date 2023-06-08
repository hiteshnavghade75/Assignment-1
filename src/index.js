const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile("file.txt", "Hello");
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile("file.txt");
}

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile("file.txt", " World");
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink("file.txt");
}

// myFileWriter()
// myFileReader()
// myFileUpdater()
// myFileDeleter()



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
console.log('new things')