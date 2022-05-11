import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../shared/modal/modal.service';
import { FlashcardService } from '../services/flashcard.service';
import { Person } from '../../models/person.model';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  personIS :Person | undefined;


  constructor(public modalService: ModalService , private flashService: FlashcardService , public sessionService : SessionService) { }



  ngOnInit(): void {
    
  }


 
}
