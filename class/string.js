let str1="Apurva";
console.log(str1);
console.log(typeof(str1));

//string interpolation
console.log(`Hello, my name is ${str1}`);

const gameCount=new String("Apurva");
//new--for creating object
console.log(gameCount.length);
console.log(gameCount.toLowerCase());
console.log(gameCount.toUpperCase());
console.log(gameCount.charAt(2));//character at 2nd pos
console.log(gameCount.indexOf('p'));//find the index of char


//Activity02--all methods --20/01/26
//Character Access Methods
console.log(gameCount.charAt(0));           // "H"
console.log(gameCount.charCodeAt(0));       // 72 (ASCII value)
console.log(gameCount[1]);                  // "a"

//Search Methods
console.log(gameCount.indexOf("i"));        // 3
console.log(gameCount.lastIndexOf("a"));    // 1
console.log(gameCount.includes("ar"));     // true
console.log(gameCount.startsWith("Ha"));   // true
console.log(gameCount.endsWith("ri"));     // true

//Extracting parts of string 
console.log(gameCount.slice(1, 3));         // "ar"
console.log(gameCount.substring(1, 3));    // "ar"
console.log(gameCount.substr(1, 2));       // "ar" (deprecated)

//Replace methods
console.log(gameCount.replace("H", "B"));          // "Bari"
gameCount.replaceAll("a", "A")       // "HArI"

//Split & Join
gameCount.split("")           // ["H", "a", "r", "i"]
gameCount.split("a")          // ["H", "ri"]

//Trim methods 
const name = "  Hari  ";
name.trim()                // "Hari"
name.trimStart()           // "Hari  "
name.trimEnd()             // "  Hari"

//Padding methods
gameCount.padStart(6, "*")    // "**Hari"
gCount.padEnd(6, "*")      // "Hari**"

//Repeat methods
gameCount.repeat(3)           // "HariHariHari"

//Comparison Methods
gameCount.localeCompare("Hari")    // 0
gameCount.localeCompare("Aari")    // 1
gameCount.localeCompare("Zari")    // -1

//Conversion methods
gameCount.toString()          // "Hari"
String.fromCharCode(72)    // "H"

