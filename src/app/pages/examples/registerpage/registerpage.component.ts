// /*
// =========================================================
// * 4x4 Overlanders India - v1.0.0
// =========================================================

// * 
// * Copyright 2024 Sourav Paul AKA 23INFINI8Y (23infini8y@gmail.com)
// * Licensed under MIT

// * Coded by Sourav Paul AKA 23INFINI8Y

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//  */
// import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
// import { FormBuilder, FormGroup , Validators } from '@angular/forms';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import firebase from 'firebase/app';

// @Component({
//   selector: "app-registerpage",
//   templateUrl: "registerpage.component.html"
// })
// export class RegisterpageComponent implements OnInit, OnDestroy {
//   registerForm: FormGroup;
//   constructor(
//     private fb: FormBuilder,
//     private afAuth: AngularFireAuth,
//     private firestore: AngularFirestore
//   ) {
//     this.registerForm = this.fb.group({
//       username: ['', [Validators.required]],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]]
//     });
//   }

//   async onRegister() {
//     const { username, email, password } = this.registerForm.value;

//     try {
//       // Register with Firebase Email/Password
//       const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      
//       // Add additional user details (like username) to Firestore
//       await this.firestore.collection('users').doc(userCredential.user?.uid).set({
//         username: username,
//         email: email,
//       });

//       console.log('User registered successfully');
//     } catch (error) {
//       console.error('Error registering user', error);
//     }
//   }

//   async googleSignIn() {
//     try {
//       const googleProvider = new firebase.auth.GoogleAuthProvider();
//       const userCredential = await this.afAuth.signInWithPopup(googleProvider);

//       // Store user details in Firestore if signing in for the first time
//       if (userCredential.additionalUserInfo?.isNewUser) {
//         await this.firestore.collection('users').doc(userCredential.user?.uid).set({
//           username: userCredential.user?.displayName,
//           email: userCredential.user?.email,
//         });
//       }

//       console.log('User signed in with Google');
//     } catch (error) {
//       console.error('Error with Google Sign-in', error);
//     }
//   }
//   isCollapsed = true;
//   focus;
//   focus1;
//   focus2;
//   @HostListener("document:mousemove", ["$event"])
//   onMouseMove(e) {
//     var squares1 = document.getElementById("square1");
//     var squares2 = document.getElementById("square2");
//     var squares3 = document.getElementById("square3");
//     var squares4 = document.getElementById("square4");
//     var squares5 = document.getElementById("square5");
//     var squares6 = document.getElementById("square6");
//     var squares7 = document.getElementById("square7");
//     var squares8 = document.getElementById("square8");

//     var posX = e.clientX - window.innerWidth / 2;
//     var posY = e.clientY - window.innerWidth / 6;

//     squares1.style.transform =
//       "perspective(500px) rotateY(" +
//       posX * 0.05 +
//       "deg) rotateX(" +
//       posY * -0.05 +
//       "deg)";
//     squares2.style.transform =
//       "perspective(500px) rotateY(" +
//       posX * 0.05 +
//       "deg) rotateX(" +
//       posY * -0.05 +
//       "deg)";
//     squares3.style.transform =
//       "perspective(500px) rotateY(" +
//       posX * 0.05 +
//       "deg) rotateX(" +
//       posY * -0.05 +
//       "deg)";
//     squares4.style.transform =
//       "perspective(500px) rotateY(" +
//       posX * 0.05 +
//       "deg) rotateX(" +
//       posY * -0.05 +
//       "deg)";
//     squares5.style.transform =
//       "perspective(500px) rotateY(" +
//       posX * 0.05 +
//       "deg) rotateX(" +
//       posY * -0.05 +
//       "deg)";
//     squares6.style.transform =
//       "perspective(500px) rotateY(" +
//       posX * 0.05 +
//       "deg) rotateX(" +
//       posY * -0.05 +
//       "deg)";
//     squares7.style.transform =
//       "perspective(500px) rotateY(" +
//       posX * 0.02 +
//       "deg) rotateX(" +
//       posY * -0.02 +
//       "deg)";
//     squares8.style.transform =
//       "perspective(500px) rotateY(" +
//       posX * 0.02 +
//       "deg) rotateX(" +
//       posY * -0.02 +
//       "deg)";
//   }

//   ngOnInit() {
//     var body = document.getElementsByTagName("body")[0];
//     body.classList.add("register-page");

//     this.onMouseMove(event);
//   }
//   ngOnDestroy() {
//     var body = document.getElementsByTagName("body")[0];
//     body.classList.remove("register-page");
//   }
// }
