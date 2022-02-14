import { LightningElement,api } from "lwc";

export default class Empresa extends LightningElement{
  /*atribuição interna
  nomeEmpresa="BixaoMemo";

  Propiriadade permite receber 
  valores externos de um componentpai
  
  para definir a propriedade, é preciso
  importar a classe api 
   */

  @api nome;
  //criei propriodade publica
  @api cnpj;
  @api city;
  @api ceo;
  @api fund;
}