# Rapid Search Assignment

## How To
I used _ts-node_ to execute the application.  
The app's entry point is the `src/index.ts` file.  
#### Example usage:
`ts-node src/index.ts topdir`

## Description
Write a class (called “FS”) in TypeScript, that takes a directory as an argument which will act as an interface to a file system.

We need two methods in this class:

**store**(`filename, content`): Stores the content in filename within the given directory  
**get**(`filename`): Returns the content from the filename

However, people are writing the same data over & over, but using different file names. Our product managers have come up with a method for saving a lot of space. So instead of storing the content as a file using the given filename, store the content using the hash of that content.

Let’s assume md5 is a "perfect" hashing function md5("content") -> "abcdef123456"
`filename` - only alphabetical characters


Example usage:
`fs = FS("/topdir")
fs.store("filename1", "a very long string1")
fs.store("filename2", "a very long string1")
fs.store("filename3", "a very long string3")
result1 = fs.get("filename1")// gets 'a very long string1'
result2 = fs.get("filename2")// gets 'a very long string1'
result3 = fs.get("filename3")// gets 'a very long string3'`

In the previous example the “`a very long string1`” is stored only once because two different files have the same content.

## Submit
Please push your solution to Github, and share the link of your solution.

## CI/CD (optional)
Write a short description of how would you deploy your solution in a cloud environment (AWS, Azure, GCP). What type of resources would you use and why?
