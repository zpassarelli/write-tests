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
  });
});

describe('growingKeys', ()=>{
  it('should return an object with growing keys',()=>{
    let testObj = {"d":true, "dd":true};
    let testObj2 = {"cow":true, "cowcow":true, "cowcowcow":true};
    assert.deepEqual(fun.growingKeys(2,"d"), testObj);
    assert.deepEqual(fun.growingKeys(3,"cow"), testObj2);
  });
  it('should return an empty object if the string is empty',()=>{
    let testObj3 = {};
    assert.deepEqual(fun.growingKeys(5,''), testObj3);
  });
  it('should return an empty object if the number is 0 or less',()=>{
    let testObj4 = {};
    assert.deepEqual(fun.growingKeys(-4,'cow'), testObj4);
  })
});
