import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html'
})
export class ProdutoDetalheComponent implements OnInit {

  constructor(private produtoService: ProdutoService, private activatedRoute: ActivatedRoute) { }

  public produto: Produto;

  ngOnInit(): void {
    let params: any = this.activatedRoute.snapshot.params;

    this.produtoService.ProdutoDetalhe(params.id)
    .subscribe(
      produto => {
        this.produto = produto;
        console.log(produto);
      },
      error => console.log(error)
    )
  }

}
