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
  }


}

module.exports = fun;
