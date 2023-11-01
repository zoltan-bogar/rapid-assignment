import {isValidAlphabetic} from "../util/validate";
import {Md5} from "ts-md5";

import {IFS} from "../interfaces";
import {TDir, TDirectoryName, TStoreParams, TGetParams} from "../types";

class FS implements IFS {
  fileSystem: Record<string, TDir>;
  directoryName: string;

  constructor(directoryName: TDirectoryName) {
    this.directoryName = directoryName;
    this.fileSystem = {};

    this.createDirectoryIfNotExists();
  }

  createDirectoryIfNotExists(): void {
    if (!(this.directoryName in this.fileSystem)) {
      this.fileSystem = {...this.fileSystem, [this.directoryName]: {}};
    }
  }

  store(args: TStoreParams): void {
    if (!isValidAlphabetic(args.filename) || !args.content) {
      throw new Error('Invalid filename or content!');
    }

    const directory: TDir = this.fileSystem[this.directoryName];
    const content: string = Md5.hashStr(args.content);

    if (!(content in directory)) {
      directory[content] = {['files']: [], ['originalContent']: args.content};
    }

    directory[content]['files'] = [...directory[content]['files'], args.filename];

    console.info('State of the filesystem after storing the file: ', this.fileSystem[this.directoryName]);
  }

  get = ({filename}: TGetParams): string => {
    if (!isValidAlphabetic(filename)) {
      throw new Error('Invalid filename!');
    }

    const directory: TDir = this.fileSystem[this.directoryName];
    const hashedContentKeys: string[] = Object.keys(directory);

    for (let i = 0; i < hashedContentKeys.length; i++) {
      if (directory[hashedContentKeys[i]]['files'].includes(filename)) {
        return directory[hashedContentKeys[i]]['originalContent'];
      }
    }

    return 'File not found!';
  }
}

export default FS;