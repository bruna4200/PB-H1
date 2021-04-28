const { body, validationResult } = require("express-validator");
const { validarCPF } = require("../Validations/cpfValidations");

const DoadorValidationRules = () => {
  return [
    body("CPF").notEmpty().withMessage("CPF obrigatório"),
    body("nomeDoador").notEmpty().withMessage("Nome do doador obrigatório"),
    body("nomeInstituicao").notEmpty().withMessage("Nome da instituição obrigatório"),
    body("CPF")
    .custom((value) => {
      if (!validarCPF(value)) throw new Error("CPF é inválido!");
      return true;
    })
    .withMessage("CPF inválido")
    
  ];
};

module.exports = {
  DoadorValidationRules,
};