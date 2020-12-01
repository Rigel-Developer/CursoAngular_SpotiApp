import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  artistas:any[] = []
  loading :boolean ;
  constructor(private spotify:SpotifyService) {
    
   }

  buscarArtista(val:string){
    
    this.loading = true;
    this.spotify.getArtist(val).subscribe((data:any) =>{
      //console.log(data.artists.items);
      this.artistas = data;
      this.loading = false;
    })
  }

}
