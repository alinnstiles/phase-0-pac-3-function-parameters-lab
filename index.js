function logTwoValues(value1, value2) {
    return `The two values are ${value1} and ${value2}.`;
  }
  
  function sayHelloTo(firstName) {
    return `Hello, ${firstName}!`;
  }
  
  
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
   }

  
  console.log(sayHelloTo("Stack overflow"));
  console.log(logTwoValues("Hello", "world"));
