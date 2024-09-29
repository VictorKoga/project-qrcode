// importando o pacote qrcode-terminal 
import qr from "qrcode-terminal"
// importando o chalk para editar fontes e cores
import chalk from "chalk";
// função que é chamada quando o qrcode é gerado
async function handle (err, result){
  if (err) {
    
    console.log("Erro na aplicação");
    return;
  }
  // variavel para ver se o qrcode é pequeno
  const isSmall = result.type == 2;
  // para gerar o QRCDODE passando como resultado o link no arquivo prompt-qrcode.js e trazendo o valor da variavel booleano
  qr.generate(result.link, {small: isSmall}, (qrcode) => {
    console.log(chalk.green.bold("QRCODE gerado com sucesso:\n"))
    console.log(qrcode)
  })   
}

export default handle;