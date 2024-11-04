import { Component } from '@angular/core';
import { BuscaService } from 'src/app/service/busca.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dados: any[] = [];
  cep: any;

  constructor(private buscaservice: BuscaService) {}

  buscar(cep: any) {
    this.buscaservice.getCEP(cep).subscribe((data: any) => {
      this.dados = Object.entries(data);
    });
  }

  criarpost(){
    const dados2: any = {
      title: 'Robson',
      body: 'Teste',
      userId: 100,
    };
    console.log(dados2);
    this.buscaservice.criar(dados2).subscribe((data: any) =>{
      this.dados = Object.entries(data); console.log(data);
    });
  }

  deletar(id: number) {
    this.buscaservice.deletar(id).subscribe(() => {
      console.log(`Registro com o ID ` + id + ` foi deletado.`);
      // Realize qualquer ação adicional necessária após a exclusão do registro.
    });
  }

  alterar(id: number) {
    let novoDados: any = {
      id: 3,
      title: 'foo',
      body: 'bar',
      userId: 4,
    } 
    this.buscaservice.alterar(id, novoDados).subscribe((data: any) => {
      console.log('Registro com o ID ' + id +  ' foi alterado.');
      console.log(data); this.dados = Object.entries(data); // Exibe a resposta da API após a alteração.
      // Realize qualquer ação adicional necessária após a alteração do registro.
    });
  }
  listar(){
    this.buscaservice.listar().subscribe((data: any) => {
    this.dados = data;
    console.table(this.dados);
    
  });
  }
  getAdote() {
    this.buscaservice.getAdote().subscribe((data: any) => {
      this.dados = data;
        console.table(this.dados);
        },
            );
          }

}
