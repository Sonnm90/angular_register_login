import {Component, OnInit} from '@angular/core';
import {SignUpForm} from '../../model/SignUpForm';
import {SignInForm} from '../../model/SignInForm';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  status = 'Please fill in the form to login!';
  form: any = {};
  signInForm: SignInForm;
  hide = true;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    );
    this.authService.signIn(this.signInForm).subscribe(data => {
      console.log('data-->',data);
      if (data.message == 'Error -> Unauthorized'){
        this.status = 'Login failed! Please try again!'
      } else {
        this.status = 'Login success!'
      }
    })
  }

}
