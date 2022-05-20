 
declare var thinkdata: {
    track():void;
}

declare module 'fs' {
  
    export function readFile(filename: string): void;
    export function writeFile(filename: string, data: string): void;
  }

