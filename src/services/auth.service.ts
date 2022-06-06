import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import { firebaseApp } from '@/main';

const auth = getAuth(firebaseApp);

export class AuthService {
  /**
   * Rejestracja użytkownika  w firebase
   *
   * @param {string} email
   * @param {string} password
   * @memberof AuthService
   */
  public addUser(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password);

    console.log('you have beed successfully Registered keep it going my bro');
  }

  public signInUser(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password);

    console.log('userCredentials udało się zalogować kolego');
  }
}

export const authService = new AuthService();
