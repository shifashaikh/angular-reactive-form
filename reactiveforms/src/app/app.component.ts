import { Component } from '@angular/core';
import {FormBuilder,Validator, Validators} from '@angular/forms';
import {forbiddenNameValidator} from "./shared/user-name.validator"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get userName(){
    return this.registrationForm.get('userName')
  }


  constructor(private fb: FormBuilder){}
  // registrationForm = new FormGroup( { 
  //   userName: new FormControl(),
  //   password:new FormControl(),
  //   confirmPassword:new FormControl(),
  //   address: new FormGroup({
  //     city:new FormControl(),
  //     state:new FormControl(),
  //     postalCode : new FormControl()
  //   })
  //  });

  registrationForm=this.fb.group(
    {
      userName:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator]],
      password:[''],
      confirmPassword:[''],
      address: this.fb.group({
        city:[''],
        state:[''],
        postalCode:['']
      })
    }
  )

   LoadAPI(){
            
    this.registrationForm.setValue({

      userName: "Shifa",
      password:"pass123",
      confirmPassword:"pass123",
      address:{
        city:'City',
        state:'State',
        postalCode :'123456'
      }
      
    })


   }
}


