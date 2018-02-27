import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ResetPasswordGuard implements CanActivate {

	code: string;

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		const code = route.params['code'];
		return (code) ? true : false;
	}
}
