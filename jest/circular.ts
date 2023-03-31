const bufferSize = 5;
let read: number = 0;
let write: number = 0;
let arr: number[] = [];

export const put = (input: number) => {
  if (arr[write] != undefined) {
    if (read === write) {
      read++;
      if (read >= bufferSize) {
        read = 0;
      }
    }
  }
  arr[write] = input;
  write++;
  if (write >= bufferSize) {
    write = 0;
  }
};
export const get = () => {
  let temread = arr[read];
  read++;
  if (read >= bufferSize) {
    read = 0;
  }
  return temread;
};
