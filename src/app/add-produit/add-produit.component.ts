import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/Produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  newProduit = new Produit();
  constructor(private produitService: ProduitService) { }
  addProduit(){
  // console.log(this.newProduit);
  this.produitService.ajouterProduit(this.newProduit);
  }
  ngOnInit() {
    // Vous pouvez éventuellement ajouter des actions d'initialisation ici.
  }
}
