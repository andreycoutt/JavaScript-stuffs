const prompt = require('prompt-sync')();

nome = (prompt("Digite seu nome: "));
salario_bruto = parseFloat(prompt("Digite seu salário: "));

var imposto_de_renda = salario_bruto * 10/100;
var salario_liquido = salario_bruto - imposto_de_renda;

console.log("Ola ", nome, "seu salário liquido é: ", salario_liquido);