import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSidenavModule, MatButtonModule, MatIconModule, MatToolbarModule, MatListModule],
  templateUrl: './app.component.html',
  styles: [
    `.example-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }`
  ],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  close() {
    this.sidenav.close();
  }
}
