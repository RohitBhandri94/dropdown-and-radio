import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratio',
  templateUrl: './ratio.component.html',
  styleUrls: ['./ratio.component.css']
})
export class RatioComponent implements OnInit {


  Phone : boolean= false;
  
  Email : boolean= false;

  Chooseoption :boolean =false

  constructor() { }

  ngOnInit(): void {
  }

  toogleTag(cathed:any){
    if(cathed=='Phone'){
        this.Phone=true;
        this.Email=false;
    }else if(cathed=='Email'){
     this.Phone=false;
     this.Email=true;
    }
   }

}
