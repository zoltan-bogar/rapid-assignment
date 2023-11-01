import {TStoreParams, TGetParams} from "./types";

export interface IFS {
  store(args: TStoreParams): void;

  get(filename: TGetParams): string;
}