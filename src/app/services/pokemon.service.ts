import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{pokemonData} from '../models/pokemonData'
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseURL:string = environment.pokeApi;

  constructor(private http:HttpClient) {}

  getPokemon(pokemonName:string): Observable<pokemonData> {
    return this.http.get<pokemonData>(`${this.baseURL}${pokemonName}`);
  }
}


