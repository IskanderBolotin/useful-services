import { WithNullishType } from "./types";

export const isDefined = <T>(v: WithNullishType<T>): v is NonNullable<T> => v !== null && v !== undefined; 

export const isDefinedString = <T extends string>(v: WithNullishType<T>): v is T => {
  return isDefined(v) && typeof v === 'string' && v.trim().length !== 0;
};

export const isDefinedNumber = <T extends number>(v: WithNullishType<T>): v is T => {
  return isDefined(v) && !Number.isNaN(v) && Number.isFinite(v);
};


export const isDefinedObject = <T extends {}>(v: WithNullishType<T>): v is T => {
  return isDefined(v) && typeof v === 'object';
};  

export const isDefinedArray = <T>(v: WithNullishType<T[]>): v is T[] => {
  return isDefinedObject(v) && Array.isArray(v) && !!v.length;
};

export const isDefinedFn = (v: any): v is "function" => {
  return isDefined(v) && typeof v === 'function';
};