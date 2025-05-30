export function getArray<T>(num: number, value? : any): (T | undefined)[] {
  return new Array(num).fill(value);
}

// num1 : 1차원 배열의 요소 개수, num2 : 2차원 배열의 요소 개수
export function get2DArray<T>(num1 : number, num2 : number, value? : any) : (T | undefined)[][] {
  let res : (T | undefined)[][] = [];
  for(let i = 0; i < num2; i++) {
    let Arr : (T | undefined)[] = [];
    for(let j = 0; j < num1; j++) {
      Arr.push(value);
    }
    res.push(Arr);
  }

  return (res);
};

export function del(Arr : any[], index : number) {
  Arr.splice(index, 1);
}