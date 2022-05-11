import { Injectable } from '@angular/core';
import { Person } from '../../models/person.model';
import { FlashcardService } from './flashcard.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpservice : FlashcardService) { }


  sessionUser :Person | any ; 

  userName: string = "";

  deckList : any = [];


  setSessionUser(user:any){
    this.sessionUser = user;
    this.userName = this.sessionUser.personName;

    this.getDeckidPerson();
  }

  getDeckidPerson(){
    this.httpservice.getDeckByPerson(this.sessionUser.idPerson)
    .subscribe(( res)=>{
      console.log(res);
      this.deckList = res;
    }
    ,(error)=>{
      console.log("Hubo error");
    });

  }


}
