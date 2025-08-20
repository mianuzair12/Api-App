import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  constructor(public service:ServiceService) {}

  ngOnInit(): void {
    this.service.userName='M.Uzair Zulfiqar'; // 👈 Set your username here
  }
}
