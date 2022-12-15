import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sfc-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sfc-button.component.html',
  styleUrls: ['./sfc-button.component.scss']
})
export class SfcButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
