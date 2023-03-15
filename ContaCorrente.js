
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{

    static numeroDeContas = 0; //igual para todos


    //"Acessor" da tag _cliente, serve para proteger de entrarem dados errados
 


    constructor (saldoInicial, cliente, agencia){
        
        super(saldoInicial, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;

    }

    //sobreescrevendo o comportamento do sacar
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor,  taxa);
    }

   
}