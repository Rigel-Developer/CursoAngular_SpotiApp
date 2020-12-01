import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import{ map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  token:string = 'BQChZeIztwY02RUCtUjm2D1X60v4WUUIkSPDUQSoL-Qg51ylBdr87X6LUNcQDNccWBye89WOEaALCOH1l9VLzsWTS5WZvwuHjMT0vRQ-rLmDQ2uWuNV_U1R8hFA73ms3L9rFkcR98j4dWQ'
  constructor(private http:HttpClient) { 
    console.log("Probando el servicio de spotify");
  }



  getQuery(query:string){
    const url =`https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })

    return this.http.get(url,{headers});
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
          .pipe( map( (data:any) =>  data.albums.items));

  }

  getArtist(val:string){

    return this.getQuery(`search?q=${ val }&type=artist&limit=15`)
          .pipe( map( (data:any) =>  data.artists.items));
  }


  viewArtist(id:string){
    return this.getQuery(`artists/${ id }`);
          //.pipe( map( (data:any) =>  data.artists.items));
  }
  
}
