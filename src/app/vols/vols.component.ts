import { AuthService } from './../auth.service';
import { AddVolComponent } from './../add-vol/add-vol.component';
import { Component, OnInit } from '@angular/core';
import { Vol } from '../model/vol.model';
import { Image } from '../model/image.model';
import { VolService } from './../vol.service';
@Component({
  selector: 'app-vols',
  templateUrl: './vols.component.html',
  styleUrls: ['./vols.component.css']
})
export class VolsComponent implements OnInit {

  vols: Vol[] = [];
  apiurl:string='http://localhost:8888/vols/api';
  constructor(private volService:VolService,public authService:AuthService) { 
  /*this.vols = volService.listeVols();*/

}

  ngOnInit(): void { 
    this.chargerVols();
  }
  // chargerVols(){
  //   this.volService.listeVol().subscribe(v => {
  //   console.log(v);
  //   this.vols = v;
  //   });
  //   this.vols.forEach((prod) => {
  //     this.volService
  //     .loadImage(prod.image.idImage)
  //     .subscribe((img: Image) => {
  //     prod.imageStr = 'data:' + img.type + ';base64,' + img.image;
  //     });
  //     });  
  //   }
  chargerVols(){
    this.volService.listeVol().subscribe(prods => {
    this.vols = prods;
    });
    }
    
    supprimerVol(v: Vol)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.volService.supprimerVol(v.idVol).subscribe(() => {
    console.log("produit supprimé");
    this.chargerVols();
    });
    } 
    
  /*supprimerVol(v:Vol)
{
  let conf = confirm("Etes-vous sûr ?");
 if (conf)
 this.volService.supprimerVol(v);
}*/


}
