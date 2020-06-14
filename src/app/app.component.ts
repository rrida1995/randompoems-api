import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Poems } from './Poems.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'API Service';
  poems: any = [];

  constructor(private appService: AppService) {}
  
  ngOnInit() {
    // call randompoems API from service
    this.appService.getData().subscribe(
      result => {
        console.log(result);
        this.poems = result;
      }
    );
  }
}
