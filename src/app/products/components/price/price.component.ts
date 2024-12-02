import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  
  @Input()
  public price:number = 0;

  // $ es un estandar para saber  si es un observable
  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('Componente HIJO: ngOnInit');
    // emite valores de maera secuencial basado en un periodo de tiempo
    // hay de desuscribirser, pero si fuera async se hace de manera automatica, pero en este caso hay que hacerlo manual, excepto en peticiones http patch put etc no vuelkven a emitir valores
    this.interval$ = interval(1000).subscribe( value => console.log(`Tick: ${value}`) );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente HIJO: ngOnChanges');
    console.log({changes});
  }
  ngOnDestroy(): void {
    console.log('Componente HIJO: ngOnDestroy');
    this.interval$?.unsubscribe();
  }

}
