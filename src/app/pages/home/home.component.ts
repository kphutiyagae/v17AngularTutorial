import {ChangeDetectionStrategy, Component, OnInit, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  title = 'home-component';
  name: WritableSignal<string> = signal('Dave');

  ngOnInit() {
    setTimeout(() => {
      this.name.set('Kopano')
    }, 2000);
  }
}
