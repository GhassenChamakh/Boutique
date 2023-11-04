import { Injectable } from '@angular/core';
import { Produit } from '../model/Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits: Produit[]; //un tableau de Produit
  produit !:Produit;
  constructor() {
    this.produits = [
      {
        idProduit: 1, nomProduit: "PC Asus", prixProduit: 3000.600, dateCreation: new Date("01/14/2011")
      },
      {
        idProduit: 2, nomProduit: "Imprimante Epson", prixProduit: 450, dateCreation: new Date("12/17/2010")
      },
      {
        idProduit: 3, nomProduit: "Tablette Samsung", prixProduit: 900.123, dateCreation: new Date("02/20/2020")
      }
    ];
  }
  listeProduits(): Produit[] {
    return this.produits;
  }
  ajouterProduit(prod: Produit) {
    this.produits.push(prod);

  }
  SupprimerProduit(prod:Produit)
  {
    const index=this.produits.indexOf(prod,0);
    if (index >-1){
      this.produits.splice(index,1);
    }


  }
  ConsulterProduit(id:number):Produit{
    return this.produit=this.produits.find(p=>p.idProduit==id)!;

  }
  updateProduit(p:Produit)
{
console.log(p);
this.SupprimerProduit(p);
this.ajouterProduit(p);
}

}
