import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/auth.service";
import { Router } from '@angular/router';
import { FlashMessagesService } from '../shared/flash-messages.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName:string;
  lastName:string;
  email:string;
  password:string;

  constructor(private authService: AuthService,
              private router: Router, private flashMessages: FlashMessagesService) { }

  ngOnInit() {
  }


  onSubmit(event){
    event.preventDefault();
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    }

    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessages.addMessege('Now you are registered, please authorization ')
        this.router.navigate(['/login'])
      } else{
        console.log('Something goes wrong :(');
        console.log(data)
      }
    })

  }
}
