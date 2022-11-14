import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FacebookAuthProvider, GoogleAuthProvider} from "@firebase/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   constructor  (  private  auth:  AngularFireAuth, private router: Router ) { }

      googleAuth () {
        return this.authLogin(new GoogleAuthProvider())
   }

    facebookAuth () {
     return this.authLogin( new FacebookAuthProvider() )
    }

     authLogin (provider:   any) {
      return   this.auth.signInWithPopup(provider).then(result => {
        console.log('succesmns',  result)
        this.router.navigateByUrl( '/home')
      }).catch(error => {
        console.log(error)
      })
     }

     async   LogOut () {
      await this.auth.signOut()  ;
      console.log( 'sesion cerrado...  ')
      this.router.navigateByUrl( '/login' )
     }
}
