function findOccurrences() {
    const inputString = document.getElementById("inputString").value;
    const letterToFind = document.getElementById("letterToFind").value;
  
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i].toLowerCase() === letterToFind.toLowerCase()) {
        count++;
      }
    }
  
    const resultElement = document.getElementById("result");
    resultElement.textContent = `The letter "${letterToFind}" appears ${count} time(s) in the input.`;
  }
  