import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  constructor(private http: HttpClient) {   }

    /*
    PERSON
  
  */ 

  getPeople(){
    return this.http.get('api/person')
  }

  getPersonEmail(email : string , pwd : string){
    let path =  "api/person/" +  email + '/' + pwd;
    return this.http.get(path)
  }

  savePerson(body:any){
    return this.http.post('api/person',body)
  }

  /*
    DECK
  
  */ 
    saveDeck(idPerson: number , deckName : string){
      let path =  "api/deck/" +  idPerson + '/' + deckName;
      return this.http.get(path)
    }

    getDeckByPerson(idPerson: number ){
      let path =  "api/deckbyPerson/" +  idPerson ;
      return this.http.get(path)
    }
    updateDeck(idDeck: number, name: string ){
      let path =  "api/deck/updateName/" + idDeck + "/" + name ;
      return this.http.put(path,{})
    }
    deleteDeck(idDeck: number){
      let path =  "api/deleteDeck/" +  idDeck ;
      return this.http.delete(path)
    }
    /*
    FLASHCARD
  */ 
    saveFlash(body:any){
      return this.http.post('api/flashcard',body)
    }
    getFlashByDeck(idDeck: number ){
      let path =  "api/flashcards/" +  idDeck ;
      return this.http.get(path)
    }
    updateFlash(idFlash: number,body:any){
      let path =  "api/flashcard/update/" + idFlash;
      return this.http.put(path,body)
    }
    deleteFlash(idFlash: number){
      let path =  "api/deleteFlashcard/" +  idFlash ;
      return this.http.delete(path)
    }

}
