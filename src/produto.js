import { LightningElement,api } from "lwc";

export default class Produto extends LightningElement{
  @api nome;
  @api prod;
  @api preco;
  @api desc;
  @api estoq;
}