import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/Produit';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/Categorie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;


  newProduit = new Produit();

  constructor(private produitService: ProduitService,private router :Router ){ }
 
  ngOnInit() {
   this.produitService.listeCategories().
subscribe(cats => {this.categories = cats;
console.log(cats);
});

  }
  addProduit(){
    this.newProduit.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;
this.produitService.ajouterProduit(this.newProduit)
.subscribe(prod => {
console.log(prod);
this.router.navigate(['produits']);
});
    }
}
