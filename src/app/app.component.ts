import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ServiceService } from './service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templatedrivenform';

  alluser: Object;
  isedit=false;  
  userObj={
    id:'',
    name:'',
    email:'',
    number:'',
    message:''
  }
  ServiceService: any;
adddata(formObj){
  console.log(formObj);
  this.serviceService.create(formObj).subscribe((response)=>{})
 this.getlatestuser();
}
getlatestuser(){
  this.serviceService.getalluser().subscribe((response)=>{
    this.alluser=response
  })
}
edit(user){
  this.isedit=true;
  this.userObj=user;
}
delete(user){
  if (confirm('Are you sure you want to delete data?')) {
    
    this.serviceService.delete(user).subscribe(()=>{
      this.getlatestuser();
        });
   
  } else {
   
    console.log('datas are not deleted');
  }

  
} 
update(){
  this.isedit=!this.isedit;
  this.serviceService.update(this.userObj).subscribe(()=>{
    this.getlatestuser();
  })
}  
constructor(private serviceService:ServiceService) { }

  ngOnInit(): void {
    this.getlatestuser();
  }

}
