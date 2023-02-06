import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  provider = new GoogleAuthProvider();

  public usuario_activo = false;
  public id_usuario_activo:any = false;

  constructor(private auth: Auth, private route: Router) {
    this.comprobar();
  }


  comprobar(){
    onAuthStateChanged(this.auth, (user) => {
    if (user) {
      this.usuario_activo = true;
      this.id_usuario_activo = user.uid;
    } else {
      this.usuario_activo = false;
      this.id_usuario_activo = false;
    }
  });}


alta(correo: string, contrasena: string){
  signInWithEmailAndPassword(this.auth, correo, contrasena)
    .then((userCredential) => {
      const user = userCredential.user;
      this.route.navigate([""]);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

registro(correo: string, contrasena: string){
  createUserWithEmailAndPassword(this.auth, correo, contrasena)
    .then((userCredential) => {
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
}

altaGoogle(){
  signInWithPopup(this.auth, this.provider)
    .then((result) => {
      const user = result.user;
      this.route.navigate([""]);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

desloguear(){
  signOut(this.auth).then(() => {
    this.route.navigate([""]);
  }).catch((error) => {

})
}

}


