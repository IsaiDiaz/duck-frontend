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
    private snackBar: MatSnackBar
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

    // Allow the user to proceed if no additional roles are required to access the route.
    if (!Array.isArray(requiredRoles) || requiredRoles.length === 0) {
      return true;
    }

    // Allow the user to proceed if all the required roles are present.
    console.log(requiredRoles);
    console.log(this.roles);
    
    if (requiredRoles.some(role => this.roles.includes(role))) {
      return true; // El usuario tiene al menos uno de los roles requeridos.
    } else {
      this.snackBar.open('Acceso denegado: No tienes los permisos necesarios.', 'Cerrar', {
        duration: 5000, // Duración del mensaje en milisegundos
      });
      return false;
    }
    
  }
}