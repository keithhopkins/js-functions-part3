// Problem 1
function getStudentName(student){
  return student.name;
}
console.log('Problem 1');
var stu = {name: 'Michael', age: 27};
console.log(getStudentName(stu));

// Problem 2
function getTotalLetters(array){
  var length=0;
  array.forEach(function(str){
    length+=str.length;
  });
  return length;
}
console.log('Problem 2');
var stringArray = ['javascript', 'is', 'not', 'python'];
console.log(getTotalLetters(stringArray));

// Problem 3
function createObject(key,value){
  var obj = {};
  obj[key]=value;
  return obj;
}
console.log('Problem 3');
console.log(createObject('city', 'Boulder'));

// Problem 4
function getNegativeIndex(array,index){
  return array[array.length-Math.abs(index)];
}
console.log('Problem 4');
var letterArray = ['a', 'b', 'c', 'd', 'e'];
console.log(getNegativeIndex(letterArray, -3));

// Problem 5
function removeCharacter(str,char){
  copy = str.slice();
  for(var i=0;i<copy.length;i++){
    if(copy[i]==char){
      copy = copy.replace(char,'');
    }
  }
  return copy;
}
console.log('Problem 5');
console.log(removeCharacter('javascript', 'a')); // => jvscript
console.log(removeCharacter('javascript', '1')); // => javascript
console.log(removeCharacter('12345', '2')); // => 1345

// Problem 6
function outputObject(obj){
  var str='';
  for (var key in obj){
    str+= key+' is '+obj[key]+', ';
  }
  return str.slice(0,str.length-2);
}
var ages = {john: 10, jerry: 11, jenny: 12 };
console.log('Problem 6');
console.log(outputObject(ages));

// Problem 7
function getVowels(str){
  var vowels = ['a','e','i','o','u'];
  return vowels.filter(function(vowel){
    return contains(str,vowel);
  });
}

function contains(str, char){
  for(var i=0;i<str.length;i++){
    if(str[i]==char){
      return true;
    }
  }
  return false;
}
console.log('Problem 7');
console.log(getVowels('javascripting'));

// Problem 8
function captureTwins(array){
  for(var i=0;i<array.length-1;i+=2){
    if(array[i]!=array[i+1]){
      return false;
    }
  }
  return true;
}
console.log('Problem 8');
console.log(captureTwins(['m', 'm', 'n', 'n', 's', 's'])); // => true
console.log(captureTwins(['m', 'm', 'm', 'n', 's', 's'])); // => false

// Problem 9
function testBooleanLogic(array){
  for(var i=0;i<array.length;i++){
    if(array[i]){
      return true;
    }
  }
  return false;
}
console.log('Problem 9');
console.log(testBooleanLogic([false, true, false, false])); // => true
console.log(testBooleanLogic([false, false, false])); // =>  false

// Problem 10
function getUniqueValues(array){
  var unique=[];
  for(var i=0;i<array.length;i++){
    if(!contains(unique,array[i])){
      unique.push(array[i]);
    }
  }
  return unique;
}
console.log('Problem 10');
console.log(getUniqueValues(['m', 'n', 'm', 'r', 'r', 's'])); // => ['m', 'n', 'r', 's']
console.log(getUniqueValues(['michael', 'ben', 'kerry', 'ben'])); // => ['michael', 'ben', 'kerry']
