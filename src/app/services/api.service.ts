import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CharacterResponse, PageInfos } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpCliente: HttpClient) { }

  private baseUrl = environment.apiBaseUrl;

  getAllCharecter(url?: string) {
    if(url)
      return this.httpCliente.get<CharacterResponse>(url);

    return this.httpCliente.get<CharacterResponse>(`${this.baseUrl}/character`);
  }

  getCharacterByName(name: string) {
    return this.httpCliente.get<CharacterResponse>(`${this.baseUrl}/character/?name=${name}`);
  }
}
