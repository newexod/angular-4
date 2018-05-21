import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {
  id: number;
  name: string;
  year: string;
  color: string;
  hash: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    this.year = this.route.snapshot.queryParams['year'];
    this.color = this.route.snapshot.queryParams['color'];
    this.hash = this.route.snapshot.fragment;


    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.name = params['name'];
    });


    this.route.queryParams.subscribe((params: Params) => {
      this.year = params['year'];
      this.color = params['color'];
    });
  }

  openMazdaPage() {
    this.router.navigate(['./cars', 8, 'Mazda'], {
      queryParams: {
        color: 'pink',
        year: 1995
      },
      fragment: 'pic'
    });
  }

}
