export type TDirectoryName = string;

export type TStoreParams = {
  filename: string,
  content: string,
}

export type TGetParams = {
  filename: string,
}

export type TFilenames = string[];

export type TOriginalContent = string;

export type TContentArray = {
  files: TFilenames,
  originalContent: TOriginalContent,
}

export type TDir = {
  [key: string]: TContentArray
};