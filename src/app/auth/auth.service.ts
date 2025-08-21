import { Injectable } from '@angular/core';
import { Auth, User, signInWithEmailAndPassword, signOut, user, authState } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  user$: Observable<User | null>;

  constructor(
    private auth: Auth,
    private router: Router
  ) {
    console.log('Inicializando AuthService');
    this.user$ = authState(this.auth);
    
    // Atualiza o estado de autenticação quando o usuário muda
    this.user$.subscribe(user => {
      console.log('Estado de autenticação mudou:', !!user);
      this.isAuthenticated.next(!!user);
    });
  }

  login(email: string, password: string): Observable<any> {
    console.log('Tentando login com Firebase Auth');
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      tap((result) => {
        console.log('Login Firebase bem sucedido:', result);
        this.router.navigate(['/aluno']);
      })
    );
  }

  logout(): Observable<any> {
    return from(signOut(this.auth)).pipe(
      tap(() => {
        this.router.navigate(['/']);
      })
    );
  }

  isLoggedIn(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  getCurrentUser(): Observable<User | null> {
    return this.user$;
  }
}
