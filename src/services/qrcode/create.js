// importando o pacote prompt
import prompt from "prompt";
// importando o prompt para escolha do tipo de QRCode
import promptSchemaQrCode from "../../prompts-schemas/prompt-schema-qrcode.js";
// importando a função para tratar a resposta do prompt
import handle from "./handle.js";

// função para criar o QRCODE
async function createQRCode() {
  prompt.get(promptSchemaQrCode, handle)
  prompt.start();
}

// exportando a função para criação do QRCode
export default createQRCode;