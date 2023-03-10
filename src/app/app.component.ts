import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  title = 'نرم افزار حسابداری';
  pageTitle: string = ''

  constructor( private titleService : Title) {}
    
  ngOnInit(): void {
    this.pageTitle = this.titleService.getTitle();
  }

  ngDoCheck() {
    this.pageTitle = this.titleService.getTitle();
  }
}
