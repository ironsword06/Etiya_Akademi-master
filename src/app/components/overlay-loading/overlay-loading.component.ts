import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay-loading',
  templateUrl: './overlay-loading.component.html',
  styleUrls: ['./overlay-loading.component.css']
})
export class OverlayLoadingComponent implements OnInit {
   @Input() text:string
  ngOnInit(): void {

  }


}
