// função que verifica os caracteres permitidos extract method
async function permittedCharacter() {
  let permitted = [];
  // se a propriedade dentro do .ENV for verdadeira tras os caracter maiusculos
  if (process.env.UPPERCASE_LETTERS === "true") 
    permitted.push(... "ACBDEFGHIJKLMNOPQRSTUVWXYZ");    

  // se a propriedade dentro do .ENV for verdadeira tras os caracter minusculos
  if (process.env.LOWERCASE_LETTERS === "true") 
    permitted.push(... "abcdefghijklmnopqrstuvwxyz");

  // se a propriedade dentro do.ENV for verdadeira tras os caracteres numericos
  if (process.env.NUMBERS === "true") 
    permitted.push(... "0123456789");
  
  // se a propriedade dentro do.ENV for verdadeira tras os caracteres especiais
  if (process.env.SPECIAL_CHARACTERS === "true") 
    permitted.push(... "!@#$%^&*()_-+={}[]|:;<>,.?/~`");
 
  return permitted;
}

export default permittedCharacter;