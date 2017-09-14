import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ImcService } from './imc.service';
import { ImcCalculatorComponent } from './imc-calculator.component';
import { ImcPipe } from './imc.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ImcCalculatorComponent, ImcPipe],
  providers: [ImcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
