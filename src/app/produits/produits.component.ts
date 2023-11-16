import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/Produit';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit{
  produits : Produit[]=[];
  constructor(private produitService: ProduitService ,public authService: AuthService,private router :Router) {
    }
    ngOnInit(): void {
      this.listeProduit();

    }
    listeProduit(){
      this.produitService.listeProduit().subscribe(prods => {
        console.log(prods);
        this.produits = prods;
      });

    }
    SupprimerProduit(p: Produit)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
    console.log("produit supprimé");
    this.listeProduit();
    });
    }

}
