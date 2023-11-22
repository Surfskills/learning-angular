import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnChanges{
  title = 'inmest-web';
  name = "Fred";
  profile = {
    id:1,
    first_name: "Fred",
    last_name: "Osege"
  }
  constructor(){
    console.log("constructor")
  }
  ngOnChanges(changes: SimpleChanges): void {
    for(const inputChanges in changes){
      console.log(changes[inputChanges], inputChanges);

    }
    
  }
}
