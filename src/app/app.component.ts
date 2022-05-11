import { Component, OnInit } from '@angular/core';
import { FlashcardService } from './flash-app/services/flashcard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'flashcardFrontend';
  constructor(private sevice: FlashcardService){

  }

  ngOnInit(): void {
    this.sevice.getPeople().subscribe((response) =>{
        console.log(response)
    },(error)=>{
      console.log("An error occured", error)
    });
  }
 



}
