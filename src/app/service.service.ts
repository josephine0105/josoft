import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http:HttpClient) { }
  create(user){
    return this._http.post("http://localhost:3000/details",user)
  }
  getalluser(){
    return this._http.get("http://localhost:3000/details")
  }
  update(user){
    return this._http.put("http://localhost:3000/details/" +user.id, user )
  }
  delete(user){ 
    return this._http.delete("http://localhost:3000/details/" +user.id);
  }
}
