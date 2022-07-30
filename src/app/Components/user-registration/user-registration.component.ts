import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userformgroup: FormGroup;
  constructor(private fb:FormBuilder) {
    // this.userformgroup = new FormGroup({
    //   fullName:new FormControl('',[Validators.required,Validators.minLength(5)]),
    //   email:new FormControl('',[Validators.required,Validators.email]),
    //   password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    //   address: new FormGroup({
    //     city: new FormControl('', [Validators.required]),
    //     PostalCode: new FormControl('', [Validators.required]),
    //     street: new FormControl('', [Validators.required]),
        
    //   })
    // });

    this.userformgroup = this.fb.group({
     fullName:['',[Validators.required,Validators.minLength(5)]] ,
     email:['',[Validators.required,Validators.email]] ,
     password:['',[Validators.required, Validators.minLength(6)]] ,
     mobile:fb.array([fb.control('')]) ,
      address: this.fb.group({
       city:['',[Validators.required]],
       PostalCode:['',[Validators.required]],
       street:['',[Validators.required]],
     })

    })
  }
  
  get fullName() {
    return this.userformgroup.get('fullName');
  }

  get mobile() {
    return this.userformgroup.get('mobile') as FormArray;
  }

  addMobile() {
    this.mobile.push(this.fb.control(''));
  }

  ngOnInit(): void {
  }

  register() {
    
  }

  

}
