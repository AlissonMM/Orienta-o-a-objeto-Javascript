import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";
import{ContaPoupanca} from "./ContaPoupanca.js";
import{ContaSalario} from "./ContaSalario.js"
import {Conta} from "./Conta.js";


const cliente1 = new Cliente("Ricardo", 11122233309);


const contaPoupancaRicardo = new ContaPoupanca(0, cliente1, 1001);

const contaCorrenteRicardo = new ContaCorrente(1000, cliente1, 1001);
contaCorrenteRicardo.sacar (500);

console.log(contaCorrenteRicardo)




/* Divisao */



/* Outra forma de escrever */

//const contaCorrente3 = new ContaCorrente();
//contaCorrente3.cliente = new Cliente();
//contaCorrente3.agencia = 203;
//contaCorrente3.depositar(200);
//contaCorrente3.cliente.nome = "wendel";
//contaCorrente3.cliente.cpf = 24401193;

//console.log(contaCorrente3)

//null é intencional, undefined é sem querer








