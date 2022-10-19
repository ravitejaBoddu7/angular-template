import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/fireBaseAuth/auth.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
})
export class TopNavigationComponent implements OnInit {
  constructor(
    private router: Router,
    private modalService: NgbModal,
    public authService: AuthService
  ) {}

  ngOnInit(): void {}

  gotoProfile() {
    this.router.navigate(['/profile']);
  }

  signout() {
    this.modalService.dismissAll();
    this.authService.SignOut();
  }
}
