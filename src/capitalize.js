const capitalize = (string) => {
   if (string === "") {
      return "";
   }
   const [firstLetter, ...restLetters] = string;

   return firstLetter.toUpperCase() + restLetters.join("");
};

console.log(capitalize("hello"));

export default capitalize;