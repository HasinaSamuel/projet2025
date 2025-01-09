import { Component} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SnapFaceListComponent } from './snap-face-list/snap-face-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SnapFaceListComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
}
