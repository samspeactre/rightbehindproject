import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})


export class NavbarComponent {
  socialLinks = [
    { url: 'https://www.facebook.com/', imageUrl: '../../assets/img/fb.png' },
    { url: 'https://www.instagram.com/', imageUrl: '../../assets/img/insta.png' },
    { url: 'https://www.linkedin.com/', imageUrl: '../../assets/img/linkedin.png' },
    { url: '', imageUrl: '../../assets/img/twitter.png' },
  ];
}
