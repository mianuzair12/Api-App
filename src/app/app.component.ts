import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './services/service.service';
import { User } from './Interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  productList:any
  users:User[]=[]
  selectedUser:User|undefined;
  // selectedUser: User | null = null;

  constructor(private service:ServiceService){

  }
  // ngOnInit(){
  //   this.service.getProductList().subscribe((data:any)=>{
  //     console.log(data);
  //     this.productList=data.products;
  //   })
  // }

    ngOnInit(){
       this.getUser();
  }
  getUser(){
        this.service.getUser().subscribe((data:User[])=>{
      console.log(this.users);
      this.users=data;
    })
  }
// addUser(user: User) {
//   if(!this.selectedUser){
//   this.service.saveUser(user).subscribe((data: User[]) => {
//     console.log( data);
//     if(data){
//        this.getUser();
//     }
  
//   })
//   }else{
//     const userData={...user,id:this.selectedUser.id}
//     this.service.updateUser(userData).subscribe((data:User)=>{
//        if(data){
//        this.getUser();
//     }
//       // console.log(data)
//     })
//     console.log('update user here', user);
//   }

// }
addUser(user: User) {
  if (!this.selectedUser) {
    // Add User
    this.service.saveUser(user).subscribe((data: User) => {
      if (data) {
        this.getUser();
      }
    });
  } else {
    // Update User
    const userData={...user,id:this.selectedUser.id}  // ✅ selectedUser already filled
    this.service.updateUser(userData).subscribe((data: User) => {
      if (data) {
        this.getUser();
        // this.selectedUser = null; // ✅ reset form after update
      }
    });
  }
}

deleteUser(id:string){
  this.service.deleteUser(id).subscribe((data:User)=>{
        if(data){
       this.getUser();
    }
console.log(data)
  })
}
// selectUser(id:string){
//     this.service.getSelectedUser(id).subscribe((data:User)=>{
//  console.log(data)
//  this.selectedUser=data;
//   })
// }

selectUser(id: string) {
  this.service.getSelectedUser(id).subscribe((data: User) => {
    console.log(data);
    this.selectedUser = data // ✅ clone to avoid direct binding issues
  });
}

}
