import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputTextModule, ButtonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
