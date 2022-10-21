function telephoneCheck(str) {
  let newStr = str.replace(/\s+/g, '');
  let firstOpt = /^1?\(\d{3}\)\d{3}-?\d{4}$/.test(newStr);
  let secondOpt = /^1?\d{3}-?\d{3}-?\d{4}$/.test(newStr);
  if (firstOpt || secondOpt) {
    return true;
  }
  else {
    return false;
  }
}
