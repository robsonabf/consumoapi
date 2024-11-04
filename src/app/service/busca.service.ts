import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BuscaService {
  private apifake: string = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) { }
  
  getCEP(cep : string) {
      const apiUrl = 'https://viacep.com.br/ws/'+ cep +'/json/';
      var busca = {headers: new HttpHeaders().set('Content-Type', 'application/json')
    }
  return this.http.get(apiUrl, busca);
}

criar(data: any){
  var cria = {headers: new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'})};
    return this.http.post(this.apifake, data, cria);
}
deletar(id: number) {
  const url = this.apifake + id;
    return this.http.delete(url);
}

alterar(id: number, novoDados: any) {
  const url = this.apifake + id;
    return this.http.put(url, novoDados);
}

listar(): Observable<any> {
  return this.http.get<any>(this.apifake);
}

getAdote(): Observable<any> {
  const apiUrl = 'https://robsonabfreitas.pythonanywhere.com/api/listar_solicitacoes/';
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Token 00384f0fb6a4acd0144080972e1320b68da5b92c'
  });
return this.http.get(apiUrl, { headers });
}
}
