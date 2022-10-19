import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    public modalService: NgbModal,
    private router: Router
  ) {}

  projectList: any = new Array();

  ngOnInit(): void {
    this.getProjectsData();
  }

  getProjectsData() {
    this.httpClient.get('assets/data/project-list.json').subscribe((data) => {
      console.log(data);
      this.projectList = data;
    });
  }

  openProjectOverview(id: any) {
    this.router.navigate([`/dashboard/project-overview/${id}`]);
  }
}
