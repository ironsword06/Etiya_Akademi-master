import { Component, OnInit } from '@angular/core';

import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private loadingService: LoadingService) {}
  isLoading: boolean = false;
  text: string

  ngOnInit(): void {
    this.subscribeToLoading();
    this.textSubj();
  }
  subscribeToLoading() {
    this.loadingService.isLoadingSubject.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
  textSubj(){
    this.loadingService.text.subscribe((text)=>{
      this.text=text;
    })
  }
  
  title: string = 'northwind';
}
