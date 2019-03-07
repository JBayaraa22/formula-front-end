import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , FormBuilder, Validators} from '@angular/forms'
import { MaterialModule } from '../../material/material.module'
import { makeToast } from 'src/app/shared/functions';
import { UserService } from 'src/app/services/user.service';
import {Router} from "@angular/router"
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm : FormGroup
  loading = false
  constructor(private fb : FormBuilder , private userService : UserService , private router: Router , private snackBar: MatSnackBar) {
    this.loginForm = this.fb.group({
      username: ["" , [Validators.required , Validators.minLength(4)]],
      password : ["" , [Validators.required , Validators.minLength(8)]]
    })
  }

  ngOnInit() {
  }
  onSubmit(){
    this.loading = true
    if(this.loginForm.valid)
    {
      console.log(this.loginForm.value)
      this.userService.login(this.loginForm.value).subscribe(data=>{
        if(data.response.code == 200)
         {
          localStorage.setItem("currentUser" , JSON.stringify(data.data))
          let currentUser = JSON.parse(localStorage.getItem("currentUser"))
          console.log(currentUser)
          setTimeout(function(){} , 1000)
          this.router.navigate(['/formula'])
          this.snackBar.open("Амжилттай нэвтэрлээ 🤗", "Хаах");
         } 
      })
    }
    else{
      makeToast("Хэрэглэгчийн нэр 4-өөс дээш урттай , нууц үг 8-аас дээш урттай банйа" , "warning")
      this.loading = false
    }
  }
}
