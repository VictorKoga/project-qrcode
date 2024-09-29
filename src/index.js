// importando o pacote prompt
import prompt from "prompt";
// importando o prompt principal que escolhe entre QRCODE ou password
import promptSchemaMain from "./prompts-schemas/prompt-schema-main.js"
// importando o prompt para gerar QRCODE
import createQRCode from "./services/qrcode/create.js";
// importando o prompt para gerar password
import createPassword from "./services/password/create.js";

// função principal que chama os prompts
async function main() {
  // chama o prompt principal e espera a resposta do usuário
  prompt.get(promptSchemaMain, async (err, choose) =>{
    // se a opção for a 1 vai criar o QRCODE
    if (choose.select == 1) await createQRCode(); 
    // se a opção for a 2 vai criar uma senha
    if (choose.select == 2) await createPassword();
  })
  // inicia o prompt
  prompt.start()
}

// chama a função principal
main()