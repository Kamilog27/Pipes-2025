import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private currentLocal = signal<'es'|'fr'|'en'>('fr');


  constructor(){
    this.currentLocal.set(
      (localStorage.getItem('locale')as 'es'|'fr'|'en')??'es'
    )
  }

  get getLocale(){
    return this.currentLocal();
  }
  changeLocale(locale:'es'|'fr'|'en'){
    localStorage.setItem('locale',locale);
    this.currentLocal.set(locale);
    window.location.reload();
  }

}
