import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FlashcardService } from '../../../services/flashcard.service';
import { SessionService } from '../../../services/session.service';
import { ModalService } from '../../../../shared/modal/modal.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent  {

  nameDeck : string = "";
  nameDeckEdicion : string = "";

  infoDeck : any = this.sessionService.deckList;
  columnsDeck :any =  [{field:"deckName", header:"Nombre de Deck"}];

  nameButtons : any = ["Editar","Borrar"]

  deckSeleccionado :any ;
 

  constructor(private httpservice:FlashcardService ,  public sessionService: SessionService, public modalService:ModalService) { }
  

  ngOnInit(): void {
    
  }

  
  functionTable(event:any){
    console.log(event[1]);
    this.deckSeleccionado = event[1];
    if(event[0] == "Editar"){
     
      this.modalService.abrir("modal-edicion");

    }
    if(event[0] == "Borrar"){
      
      this.modalService.abrir("modal-delete");

    }

  }

  cancelarModal(){
    this.modalService.cerrar("modal-edicion");
    this.modalService.cerrar("modal-delete");
  }

  actualizarDeck(){

    this.httpservice.updateDeck(this.deckSeleccionado.idDeck, this.nameDeckEdicion)
    .subscribe(( res)=>{
      console.log(res);
      this.sessionService.getDeckidPerson();
      this.infoDeck = this.sessionService.deckList;
      alert("Deck actualizado correctamente");
      this.cancelarModal();
     
    }
    ,(error)=>{
      console.log("Hubo error");
    });

  }
  eliminarDeck(){
    this.httpservice.deleteDeck(this.deckSeleccionado.idDeck)
    .subscribe(( res)=>{
      console.log(res);
      this.sessionService.getDeckidPerson();
      alert("Deck eliminado correctamente");
      this.cancelarModal();
    }
    ,(error)=>{
      console.log("Hubo error");
      alert("No se pudo eliminar,recuerde que puede tener flashcards asociados.");
    });
    
  }
  crearDeck(){
    this.httpservice.saveDeck(this.sessionService.sessionUser.idPerson, this.nameDeck)
    .subscribe(( res)=>{
      console.log(res);
      
      this.sessionService.getDeckidPerson();
      this.infoDeck = this.sessionService.deckList;
      alert("Deck creado correctamente");
    }
    ,(error)=>{
      console.log("Hubo error");
    });
  }
}
