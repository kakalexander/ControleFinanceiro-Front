import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
  private apiUrl = 'http://localhost:3000/api';

  getAllProfessionals(): Observable<any> {
    return from(axios.get(`${this.apiUrl}/professionals`));
  }

  addProfessional(professional: any) {
    return axios.post(this.apiUrl + '/add', professional);
  }

  saveFaturamento(professionalId: string, faturamento: any): Observable<any> {
    return from(axios.post(`${this.apiUrl}/professionals/${professionalId}/faturamento`, faturamento));
  }
}
