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
  
  flashcardList : Array<Object> =[];
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

      this.deckList.forEach((element:any) => {
          this.getFlashcard(element.idDeck);
      });
    }
    ,(error)=>{
      console.log("Hubo error");
    });

  }

  getFlashcard(idDeck:any){
    this.httpservice.getFlashByDeck(idDeck)
    .subscribe(( res :any)=>{
      
      console.log("infoflash",res);
     res.forEach((element:any) => {
       this.flashcardList.push(element);
     });
      // this.flashcardList = this.flashcardList.push(res);
      
      // await new Promise(f => setTimeout(f, 2000));

      
    }
    ,(error)=>{
      console.log("Hubo error");
    });
  }




}
