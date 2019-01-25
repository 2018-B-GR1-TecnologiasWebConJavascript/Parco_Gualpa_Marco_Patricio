//auth.service.ts
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class AuthService{
  usuario; // probar usuarios usuario:};
  constructor(private readonly _httpClient: HttpClient){

  }
  login(username:string, password:string){
    const url= environment.url();
    return this._httpClient.post(url,{username:username,password:password})
      .pipe(map(r=><Raza>r)); //casteo
  }
}
