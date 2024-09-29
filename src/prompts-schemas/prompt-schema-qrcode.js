// importando o pacote chalk para editar as fontes
import chalk from "chalk";

const promptSchemaQrCode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QRCODE"),
  },
  {
    name: "type",
    description: chalk.yellow.bold("Escolha entre o  tipo de QRCODE (1 - NORMAL ou (2 - TERMINAL"),
    pattern: /^[1-2]+$/,
    message: chalk.red.bold.italic("Escolha apenas entre 1 e 2"),
    required: true,
  }
]

export default promptSchemaQrCode