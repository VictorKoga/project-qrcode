// importando o arquivo de caracters permitidos
import permittedCharacter from "./utils/permitted-characters.js";

// funcao que retorna uma senha que retorna para o CREATEPASSWORD
async function handle() {
  let characters = [];
  let password = "";

  const passwordLength = process.env.PASSWORD_LENGTH
  characters = await permittedCharacter();
  // sorteia caracteres aleatoriamente para formar a senha
  for (let i = 0; i < passwordLength; i++) {
    // gera um número aleatório entre 0 e o comprimento dos caracteres
    const index = Math.floor(Math.random() * characters.length);
    // += adiciona o caracter sorteado à senha
    password += characters[index];
  }
  return password;
}

export default handle