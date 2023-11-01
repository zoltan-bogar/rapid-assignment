import FS from './fs/FS';
import {isValidAlphabetic} from "./util/validate";

const dirName = [...process.argv].pop() as string;

if (process.argv.length !== 3) {
  throw new Error('Invalid params!');
}
if (!isValidAlphabetic(dirName)) {
  throw new Error('Invalid directory name!');
}

const fs = new FS(dirName);
fs.store({filename: "filename", content: "A very long string"});
fs.store({filename: "filenamee", content: "a very long string1"});
fs.store({filename: "filenameee", content: "a very long string1"});
const result1 = fs.get({filename: "filename"});// gets 'A very long string'
const result2 = fs.get({filename: "filenamee"})// gets 'a very long string1'
const result3 = fs.get({filename: "filenameee"})// gets 'a very long string1'

console.log({result1, result2, result3});
