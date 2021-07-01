import { Component } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  activeYear: string;
  constructor(private getDataService: GetDataService) {}

  ngOnInit() {
    this.getDataService.year$.subscribe(year => {
      this.activeYear = year;
    });

    this.getDataService.getData('2011');
  }

  getData(year: string) {
    this.getDataService.getData(year);
  }
}
