var chai = require('chai');
var assert = chai.assert;
var fun = require('../index.js');

describe('basic test',()=>{
  it('should be a function',()=>{
    assert.isFunction(fun.test);
  });
});

describe('sum', ()=>{
  it('should sum two numbers',()=>{
    assert.equal(fun.sum(2,5),7);
  });
});

describe('countVowel', ()=>{
  it('should return 0 if the string is empty',()=>{
    assert.equal(fun.countVowel(''),0);
  })
  it('should return the number of vowels in a string',()=>{
    assert.equal(fun.countVowel('vow'),1);
    assert.equal(fun.countVowel('try'),0);
    assert.equal(fun.countVowel('noodle'),3);
  });
  it('should handle non-string inputs',()=>{
    assert.equal(fun.countVowel(50),0);
    assert.equal(fun.countVowel(undefined),0);
  })
})
