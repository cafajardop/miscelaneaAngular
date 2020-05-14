import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
    `
      .btn {
        margin: 2px;
      }
    `,
  ],
})
export class ClasesComponent implements OnInit {
  alerta: string = 'alert-danger';
  loading:boolean = false;

  propiedades : any = {
    danger: false
  }
  
  constructor() {}

  ngOnInit(): void {}



  ejecutar(){
    console.log(this.loading);
    this.loading = true;
    setTimeout(() => this.loading = false, 3000)
  }

}
