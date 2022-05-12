import { Component, OnInit } from '@angular/core';
import { FlashcardService } from '../../../services/flashcard.service';
import { SessionService } from '../../../services/session.service';
import { ModalService } from '../../../../shared/modal/modal.service';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {

  constructor(private httpservice: FlashcardService ,  public sessionService: SessionService , public modalService: ModalService) { }

  frontF : string = "";
  backF : string = "";

 

  infoFlash : any ;
  columnsFlash :any =  [{field:"frontSide", header:"Front Side "},
  {field:"backSide", header:"Back Side "},  ];

  nameButtons : any = ["Editar","Borrar"]

  flashSeleccionado :any ;
  accionF :any = "";

  deckSeleccionado :any ;
  deckSeleccionado2 :any ;
  deckNameSeleccionado :any ;
  deckNameSeleccionado2 :any ;
  ngOnInit(): void {
  }

  getFlashcard(idDeck:any){
    this.httpservice.getFlashByDeck(idDeck)
    .subscribe(( res)=>{
      console.log(res);
      this.infoFlash = res;
    }
    ,(error)=>{
      console.log("Hubo error");
    });
  }

  crearFlashcard(){
   
    this.accionF= "Crear";
    this.modalService.abrir("modal-crear-editar-f");

  }
  functionTable(event:any){
    console.log(event[1]);
    this.flashSeleccionado = event[1];
    if(event[0] == "Editar"){
      this.accionF="Actualizar";
      this.backF = this.flashSeleccionado.backSide;
      this.frontF = this.flashSeleccionado.frontSide;
      this.deckNameSeleccionado2 = this.deckSeleccionado.deckName;
      
      this.modalService.abrir("modal-crear-editar-f");

    }
    if(event[0] == "Borrar"){  
      this.modalService.abrir("modal-delete-f");
    }

  }

  cambiarDeck(){

    var idDeck = -1;
    this.sessionService.deckList.forEach( (element:any) => {
      if(element.deckName == this.deckNameSeleccionado){
        this.deckSeleccionado =  element;
        idDeck = element.idDeck;
      }
  
    });
    this.getFlashcard(idDeck);
  }
  guardarDeck(){

    var idDeck = -1;
    this.sessionService.deckList.forEach( (element:any) => {
      if(element.deckName == this.deckNameSeleccionado2){
        this.deckSeleccionado2 =  element; 
      }      
    });
  }

  cancelarModal(){
    this.modalService.cerrar("modal-crear-editar-f");
    this.modalService.cerrar("modal-delete-f");
  }

  actualizar(body:any){

    this.httpservice.updateFlash(this.flashSeleccionado.idFlashcard, body)
    .subscribe((res)=>{
      console.log(res);
      
      alert("Flash actualizado correctamente");
      this.cancelarModal();
    }
    ,(error)=>{
      console.log("Hubo error");
    });

  }

  actualizarCrearFlashcard(accion:any){

    console.log(this.deckSeleccionado2);
    console.log(this.frontF);
    console.log(this.backF);
    if(accion == 'Crear'){
      //var dateT = new Date().toISOString();
      var flash = JSON.stringify({idDeck: this.deckSeleccionado2.idDeck , frontSide: this.frontF , backSide:this.backF  })
      this.crearF(JSON.parse(flash));
    }
    else{
      var flash = JSON.stringify({idFlashcard:this.flashSeleccionado.idFlashcard, idDeck: this.deckSeleccionado2.idDeck , frontSide: this.frontF , backSide:this.backF , timestampF: this.flashSeleccionado.timestampF })
      
      this.actualizar(JSON.parse(flash));
    }
  }
  eliminarFlashcard(){
    this.httpservice.deleteFlash(this.flashSeleccionado.idFlashcard)
    .subscribe(( res)=>{
      console.log(res);
      
      alert("Flash eliminado correctamente");
      this.cancelarModal();
    }
    ,(error)=>{
      console.log("Hubo error");
      alert("No se pudo eliminar,recuerde que puede tener flashcards asociados.");
    });
    
  }
  
  crearF(body:any){
    this.httpservice.saveFlash(body)
    .subscribe(( res)=>{
      console.log(res);
      //this.getFlashcard(this.deckSeleccionado.idDeck);
      alert("Flash creado correctamente");
      this.cancelarModal();
    }
    ,(error)=>{
      console.log("Hubo error");
    });
  }
}
