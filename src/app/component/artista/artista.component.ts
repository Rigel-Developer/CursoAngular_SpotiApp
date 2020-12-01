import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
 
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista:any = {};
  loading:boolean;
  constructor(private router:ActivatedRoute, private spotify:SpotifyService) {

    this.router.params.subscribe(params =>{
      this.getArtista(params['id'])
    })
   }

  getArtista(id:string){
    this.loading = true;
    this.spotify.viewArtist(id)
    .subscribe(artist =>{
      console.log(artist)
      this.artista = artist
      this.loading = false;
    })
  }

  

}
