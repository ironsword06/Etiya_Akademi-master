import { BehaviorSubject, Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
isLoadingSubject: BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false);
text: BehaviorSubject<string>= new BehaviorSubject<string>("çok farklı bir şey");
  constructor() { }

  startLoading(text:string){
    this.text.next(text)
    this.isLoadingSubject.next(true);
  }
  stopLoading(){
    setTimeout(()=>{
       this.isLoadingSubject.next(false);
    },3000)
  }

}
