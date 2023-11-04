import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from './../services/produit.service';
import { Produit } from '../model/Produit';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit{
   ProduitSelectionner=new Produit();
  constructor(private activateRoute:ActivatedRoute,private router:Router,private produitService:ProduitService){}
  ngOnInit() {
    //console.log(this.activateRoute.snapshot.params['id']);
    this.ProduitSelectionner=this.produitService.ConsulterProduit(this.activateRoute.snapshot.params['id']);
    console.log(this.ProduitSelectionner);

  }
  updateProduit()
  { //console.log(this.currentProduit);
  this.produitService.updateProduit(this.ProduitSelectionner);
  this.router.navigate(["produits"])
  }

}
