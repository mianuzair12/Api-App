import { Component,OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import { ServiceService } from '../services/service.service';
import { filter } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  display='';
constructor(public router:Router,public Serviceservice:ServiceService){}
ngOnInit(){
 this.router.events.pipe(
    filter((event: any | null): event is NavigationEnd => event instanceof NavigationEnd)
  ).subscribe((event: NavigationEnd) => {
    this.updateNavVisibility(event.urlAfterRedirects);
  });
}
updateNavVisibility(url: string): void {
  this.Serviceservice.isContactPage = url.includes('/contact');
  this.Serviceservice.isAboutPage = url.includes('/about');
  this.Serviceservice.isHomePage = url === '/' || url.includes('/home');
  
}
}
