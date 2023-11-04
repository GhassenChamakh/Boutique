import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/Produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit{
  produits : Produit[];
  constructor(private produitService: ProduitService ) {
    this.produits = produitService.listeProduits();
    }
    ngOnInit() {
      // Vous pouvez éventuellement ajouter des actions d'initialisation ici.
    }
    SupprimerProduit(prod:Produit)
    {//console.log(prod);
      this.produitService.SupprimerProduit(prod);
    }

}
