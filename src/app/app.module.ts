import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';

import { GetDataService } from './services/get-data.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, MenuComponent, DetailsComponent],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
