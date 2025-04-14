import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { LocalService } from '../../services/local.service.ts.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe,UpperCasePipe,TitleCasePipe,DatePipe],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPageComponent {
  localService=inject(LocalService);
  currentLocal = signal(inject(LOCALE_ID));
  nameLower = signal('camilo');
  nameUpper = signal('CAMILO');
  fullname = signal('CamIlo GArciA');


  customDate=signal(new Date());

  tickingDateEffect=effect((onCleanup)=>{
    const interval=setInterval(()=>{
      this.customDate.set(new Date())
    },1000);
    onCleanup(()=>{
      clearInterval(interval);
    })
  })

  changeLocale(locale:'es'|'fr'|'en'){
    this.localService.changeLocale(locale);
  }
 }
