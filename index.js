const fun = {
  test: () => {
    return 'working';
  },

  sum: (num1,num2) => {
    return num1 + num2;
  },

  countVowel: (str) => {
    if(typeof str !== 'string') return 0;
    let counter = 0;
    str.split('').map(val => {
      if('aeiou'.includes(val)) counter++;
    });
    return counter;
  },

  growingKeys: (num, str) => {
    if(str === '') return {};
    if(num < 1) return {};
    let obj = {};
    let strKey = str;
    for(let i = 0; i < num; i++){
      obj[strKey] = true;
      strKey += str;
    }
    return obj;
  }

}

module.exports = fun;
