import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SignInForm} from '../model/SignInForm';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_SIGNUP = environment.API_LOCAL + 'signup';
  private API_SIGNIN = environment.API_LOCAL + 'signin';

  constructor(private httpClient: HttpClient) {
  }

  signUp(signUpForm: SignUpForm): Observable<any> {
    return this.httpClient.post<any>(this.API_SIGNUP, signUpForm);
  }
  signIn(signInForm: SignInForm): Observable<any>{
    return this.httpClient.post<any>(this.API_SIGNIN,signInForm);
  }
}
