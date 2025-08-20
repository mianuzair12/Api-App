import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  headers = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
      "Access-Control-Allow-Headers": "origin, x-requested-with",
    })
  };
   url='http://localhost:3000/userDetails';
  constructor(private http:HttpClient) { }
  // getProductList(){
  //   const url='https://dummyjson.com/products';
  //   return this.http.get(url);
  // }

  getUser():Observable<User[]>{
  
    return this.http.get<User[]>(this.url);
  }
saveUser(user:User):Observable<User>{
  
  return this.http.post<User>(this.url,user);
  // return this.http.post<User[]>(url,user, this.headers);
}

deleteUser(id:string):Observable<User>{
  return this.http.delete<User>(this.url + '/' + id)
}

// getSelectedUser(id:string):Observable<User[]>{
//   return this.http.get<User[]>(this.url + '/' + id)
// }
getSelectedUser(id: string): Observable<User> {
  return this.http.get<User>(this.url + '/' + id)
}

updateUser(user:User):Observable<User>{
return this.http.put<User>(this.url+'/'+user.id,user)
}
    isContactPage:boolean=false;
  isAboutPage:boolean=false;
  isHomePage:boolean=false;
  userName:string='';
}
