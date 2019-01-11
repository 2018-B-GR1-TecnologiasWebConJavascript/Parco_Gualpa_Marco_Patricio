//
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable, pipe} from "rxjs";
import {Raza} from "../../interfaces/raza";

@Injectable()
export class RazaRestService {
  nombreModelo = '/Raza';

  constructor(private readonly _httpClient: HttpClient) {

  }

  fincAll(): Observable<Raza[]> {
    //Observable
    const razas$ = this._httpClient
      .get(environment.url + this.nombreModelo)
      .pipe(map(r => <Raza[]> r));  //Castear
    return razas$;
  }

  delete(id: number): Observable<Raza[]> {
    this._httpClient
      .get(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <Raza[]> r));  //Castear
  }

  create(nombre:string):Observable<Raza>{
    const objetoAGuardar:Raza={
      nombre:nombre
    };
    const url= environment.url+ this.nombreModelo;
    return this._httpClient
      .post(url,objetoAGuardar)
      .pipe(map(r=><Raza>r)); //Castear

  }
}


//epn.edu.ec -> 192.170.1.2
//CORS -> Navegador
//Es una peque;a seguridad
//epn.edu.ec -> HTTP fbi.epn.us
//BLOQUEO
//fbi.gov.us -> HTTP fbi.gov.us
//No los bloquea
//fbi.gov.us -> 192.220.1.5
