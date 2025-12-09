import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

   @Injectable({
     providedIn: 'root'
   })
   export class AuthGuard implements CanActivate {
     constructor(private router: Router) {}
     canActivate(): boolean {
      const flag: boolean = false;
      if (flag) {
        return true; // Allow access to the route
      }
      else {
        // Redirect to the login page
        this.router.navigate(['/403']);
        return false;
      }
     }
   }