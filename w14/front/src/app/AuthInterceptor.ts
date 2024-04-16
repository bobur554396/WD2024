import {Injectable, Provider} from "@angular/core";
import {HTTP_INTERCEPTORS, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const access = localStorage.getItem("access");
    if (access) {
      const newReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${access}`)
      });
      return next.handle(newReq);
    }

    return next.handle(req);
  }
}

