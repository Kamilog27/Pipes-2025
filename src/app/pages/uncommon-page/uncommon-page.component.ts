import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe } from '@angular/common';
import { interval, tap } from 'rxjs';

const client1 = {
  name: 'Camilo',
  gender: 'male',
  age: 26,
  address: 'Bogotá, Colombia'
}
const client2 = {
  name: 'Luz',
  gender: 'female',
  age: 46,
  address: 'Boyacá, Colombia'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe,AsyncPipe],
  templateUrl: './uncommon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPageComponent {

  //i18n Select 
  client = signal(client1);


  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }
  //i18n Plural

  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  })

  clients = signal([
    'Maria',
    'Pedro',
    'Camilo',
    'Luz',
    'Juan',
    'Carlos',
    'David'
  ])
  deleteClient() {
    this.clients.update(prev => prev.slice(1));
  }
  //KeyValue Pipe
  profile={
    name:'Camilo',
    age:26,
    address:'Bogotá, Colombia'
  }
  //Async Pipe
  promiseValue:Promise<string> = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('Tenemos data en la promesa.');
        console.log('Promesa finalizada');
      },3500);
  });

  myObservableTimer = interval(2000).pipe(
    tap((value)=>console.log('tap:',value))
  )


}
