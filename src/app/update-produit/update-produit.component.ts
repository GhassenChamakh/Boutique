import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from './../services/produit.service';
import { Produit } from '../model/Produit';
import { Categorie } from '../model/Categorie';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit{
   ProduitSelectionner=new Produit();
   UpdateIdCat! : number;
   categories !:Categorie[];
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private produitService:ProduitService){}

  ngOnInit(): void {
    this.produitService.listeCategories().
    subscribe(cats => {this.categories = cats;
    console.log(cats);
    });
    this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.ProduitSelectionner = prod;
    this.UpdateIdCat =this.ProduitSelectionner.categorie.idCat;
    } )
  }

  updateProduit()
  {
    this.ProduitSelectionner.categorie = this.categories.
 find(cat => cat.idCat == this.UpdateIdCat)!;
this.produitService.updateProduit(this.ProduitSelectionner).subscribe(prod => {
this.router.navigate(['produits']); }
);
  }

}
