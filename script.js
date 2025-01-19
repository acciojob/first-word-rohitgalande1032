function firstWord(s) {
  // your code here
	let firstWord = "";
	s = s.trim();
	for(let i=0; i<s.length; i++) {
		if(s[i] !== " ") {
			firstWord+=s[i];
		}else {
			break;
		}
	}
	return firstWord;
} 
  
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
