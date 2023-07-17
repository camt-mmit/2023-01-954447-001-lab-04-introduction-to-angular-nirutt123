import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  Currenttime = new Date();
  Useragent = navigator.userAgent;
  Languages = navigator.languages;
  Cookieenagled = navigator.cookieEnabled;
  Logicalprocessors = navigator.hardwareConcurrency;
  Maxtouchpoints = navigator.maxTouchPoints;
}
