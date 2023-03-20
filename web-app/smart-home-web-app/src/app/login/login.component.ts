import {Component, OnInit} from '@angular/core';
import {Md5} from 'ts-md5';
import users from '../../assets/users/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(){
  }

  ngOnInit(): void {
  }

  login(): void {
  // @ts-ignore
    const username = document.getElementById('user').value;
    // @ts-ignore
    const password = document.getElementById('password').value;
    const hashed = Md5.hashStr(password);
    console.log(hashed);
    let validUser = false;
    for (const user of users.users){
      if (user.username === username && user.password === hashed){
        validUser = true;
        window.location.href = '/dashboard' ;
      }
    }
    if (!validUser){
      alert('Contraseña o usuario incorrecto');
    }


}

}
