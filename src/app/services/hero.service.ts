import { Injectable } from '@angular/core';
import {Md5} from "ts-md5/dist/esm/md5";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment.dev";
import {ApiResponse, Character} from "../models/api.types";
import {of, switchMap, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  date = new Date();
  timestamp = this.date.getDate().toString();

  apiHashValue = Md5.hashStr( this.timestamp + environment.M_API_PRIVATE_KEY + environment.M_API_PUBLIC_KEY);
  constructor(public httpClient: HttpClient) { }

  getAllCharactersPaginated(pageIndex: number, resultLimit: number){

    return this.httpClient.get<ApiResponse>(`${environment.M_API_URL}/characters?ts=${this.timestamp}&apikey=${environment.M_API_PUBLIC_KEY}&hash=${this.apiHashValue}&offset=${resultLimit * pageIndex}`)
        .pipe(
            switchMap( response => {
              let characterList = new Array<Character>();
              if(response?.data?.results){
                characterList = response.data.results;
              }
              return of(characterList);
            })
        )
  }

  getCharacterByName(name: string){

    this.httpClient.get<ApiResponse>(`${environment.M_API_URL}/characters?nameStartsWith=${name}&ts=${this.timestamp}&apikey=${environment.M_API_PUBLIC_KEY}&hash=${this.apiHashValue}`)
        .pipe(
            switchMap( response => {
              let characterList = new Array<Character>();
              if(response?.data?.results){
                characterList = response.data.results;
              }
              return of(characterList);
            })
        )
  }

  getCharacterById(characterId: string){
    return this.httpClient.get<ApiResponse>(`${environment.M_API_URL}/characters/${characterId}?ts=${this.timestamp}&apikey=${environment.M_API_PUBLIC_KEY}&hash=${this.apiHashValue}`)
        .pipe(
            tap(console.log),
            switchMap( response => {
              let characterList = new Array<Character>();
              if(response?.data?.results){
                characterList = response.data.results;
              }
              return of(characterList);
            })
        )
  }
}
