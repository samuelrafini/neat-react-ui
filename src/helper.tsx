import { Falsy } from "./types";

export const addClassName = (classes: (Falsy | string)[]): string => classes.filter(Boolean).join(' ');