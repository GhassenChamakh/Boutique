import { Injectable } from '@angular/core';
import { Produit } from '../model/Produit';
import { Categorie } from '../model/Categorie';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiCat, apiURL } from '../env';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


  produits: Produit[]=[];
  produit !:Produit;
  //categories : Categorie[];

  constructor(private http:HttpClient) {

  }
  listeProduit(): Observable<Produit[]>{
    return this.http.get<Produit[]>(apiURL+"/afficherProduits");
  }
  /* listeProduits(): Produit[] {
    return this.produits;
  } */
  /* ajouterProduit(prod: Produit) {
    this.produits.push(prod);

  } */
  ajouterProduit(prod:Produit): Observable<Produit[]>{
    return this.http.post<Produit[]>(apiURL+"/ajouterProduit",prod,httpOptions);
  }
  supprimerProduit(id : number) {
    const url = apiURL+"/SupprimerProduit"+`/${id}`;
    return this.http.delete(url, httpOptions);
    }

 consulterProduit(id: number): Observable<Produit> {
    const url = apiURL+"/ModifierProduit"+`/${id}`;
    return this.http.get<Produit>(url);
    }

  trierProduits(){
    this.produits = this.produits.sort((n1,n2) => {
    if (n1.idProduit! > n2.idProduit!) {
    return 1;
    }
    if (n1.idProduit! < n2.idProduit!) {
    return -1;
    }
    return 0;
    });
    }

    updateProduit(prod :Produit) : Observable<Produit>
    {
    return this.http.put<Produit>(apiURL+"/ModifierProduit", prod, httpOptions);
    }

listeCategories():Observable<Categorie[]>{
  return this.http.get<Categorie[]>(ApiCat+"/afficherCategories");
  }

}



