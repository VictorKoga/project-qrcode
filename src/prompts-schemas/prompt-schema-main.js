import chalk from "chalk"

const promptSchemaMain = [
  {
    // nome do campo para armazenar a escolha
    name: "select",
    // descrição da pergunta ao usuário para escolher a ferramenta
    description: chalk.yellow.bold("Escolha a ferramenta (1 - QRCODE ou (2 - PASSWORD"),
    // regex para escolher somente entre 1 e 2 se usar outro ele da a mensagem
    pattern: /^[1-2]+$/,
    // mensagem de erro se a entrada não é um número entre 1 e 2
    message: chalk.red.bold.italic("Escolha apenas entre 1 e 2"),
    // campo obrigatório para esta pergunta
    required: true,
  }  
]
export default promptSchemaMain
