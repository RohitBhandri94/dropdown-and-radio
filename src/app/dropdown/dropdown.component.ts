import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  Phone : boolean= false;
  
  Email : boolean= false;

  Chooseoption :boolean =false


    constructor() { }

  ngOnInit(): void {

  }

  toogleTag(cathed:any){
   if(cathed.target.value=='Phone Number'){
       this.Phone=true;
       this.Email=false;
   }else if(cathed.target.value=='Email'){
    this.Phone=false;
    this.Email=true;
   }else if(cathed.target.value=='Choose option'){
   
   }
  }


}
