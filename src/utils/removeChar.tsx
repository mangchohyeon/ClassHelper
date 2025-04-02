export function removeChar(str : string, index : number) {
  if (index < 0 || index >= str.length) {
    return str; // 유효하지 않은 인덱스인 경우 원래 문자열 반환
  }
  return str.slice(0, index) + str.slice(index + 1);
}

