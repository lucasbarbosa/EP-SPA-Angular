import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "./produto";
import { Observable } from "rxjs";

@Injectable()
export class ProdutoService{
    constructor(private http: HttpClient){ }

    protected UrlServiceV1: string = "http://localhost:3000/";

    ObterProdutos(): Observable<Produto[]>{
        var produtos = this.http.get<Produto[]>(this.UrlServiceV1 + "produtos");
        return produtos;
    };

    ProdutoDetalhe(id: string): Observable<Produto>{
        var produto = this.http.get<Produto>(this.UrlServiceV1 + "produtos/" + id);
        return produto;
    };
}