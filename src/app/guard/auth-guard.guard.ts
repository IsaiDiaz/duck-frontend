import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { MatSnackBar } from '@angular/material/snack-bar';  

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {
  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService,
    ) {
    super(router, keycloak);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    // Force the user to log in if currently unauthenticated.
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url
      });
    }

    // Get the roles required from the route.
    const requiredRoles = route.data['roles'];
    console.log(requiredRoles);

    // Allow the user to proceed if no additional roles are required to access the route.
    if (!Array.isArray(requiredRoles) || requiredRoles.length === 0 || this.roles.includes('ADMIN')) {
      return true;
    }

    // Allow the user to proceed if all the required roles are present.
    console.log(this.roles);
    /*const hasRequireRoles = requiredRoles.every((role) => this.roles.includes(role));

    if(!hasRequireRoles){
      this.snackBar.open('No tienes permisos para acceder a esta página', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }*/

    return requiredRoles.every((role) => this.roles.includes(role));
    
  }
}