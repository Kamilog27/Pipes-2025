import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../heroes.data';
import { canFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroeColorPipe } from '../../pipes/hero-color.pipe';
import { HeroeTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { HeroeCreatorPipe } from '../../pipes/heroe-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/heroe-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe,canFlyPipe,HeroeColorPipe,HeroeTextColorPipe,HeroeCreatorPipe,HeroSortByPipe,HeroFilterPipe],
  templateUrl: './custom-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPageComponent {

  name=signal('Juan Camilo');
  upperCase = signal(true);
  change(){
    this.upperCase.set(!this.upperCase());
  }
  heroes=signal(heroes);
  sortBy=signal<keyof Hero|null>(null);

  searchQuery=signal('');
 }
