import { Component, OnInit } from '@angular/core';
import { FlashcardService } from '../../../services/flashcard.service';
import { SessionService } from '../../../services/session.service';
import { ModalService } from '../../../../shared/modal/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {

  constructor(private httpservice: FlashcardService ,  public sessionService: SessionService , public modalService: ModalService, private router: Router) { }

  deckSeleccionado :any ;
  
  deckNameSeleccionado :any ="";
  

  infoFlash : Array<Object> |any =[];
  columnsFlash :any =  [{field:"frontSide", header:"Front Side "},
  {field:"backSide", header:"Back Side "},  ];

  frontSide:any= "";
  backSide :any = "";

  indice = -1;

  visibleAns = false;

  sinFlash = true;

  ngOnInit(): void {
  }

  cambiarDeck(){

    var idDeck = -1;
    this.sessionService.deckList.forEach( (element:any) => {
      if(element.deckName == this.deckNameSeleccionado){
        this.deckSeleccionado =  element;
        idDeck = element.idDeck;

      }
  
    });
    this.indice = -1;
    this.getFlashcard(idDeck);
  }

  siguienteF(){
    if(this.infoFlash.length != 0){
      this.sinFlash = false;
      this.indice = this.indice+1;
      this.visibleAns = false;
     
      if(this.infoFlash.length == this.indice){
       
        this.indice = 0;
      }
      console.log("indice",this.indice);
      console.log("info:", this.infoFlash);
      this.frontSide =this.infoFlash[this.indice].frontSide ;
      this.backSide =this.infoFlash[this.indice].backSide ;
  


    }
    else{
      this.sinFlash = true;      

    }
   
  }
  getFlashcard(idDeck:any){
    
    

    console.log("this ifno",this.infoFlash);
   
    this.httpservice.getFlashByDeck(idDeck)
    .subscribe(async ( res)=>{
      
      this.infoFlash = res;
      console.log("infoflash",res);
      
    this.siguienteF();
    }
    ,(error)=>{
      console.log("Hubo error");
    });
  }



  revelarF(){
    this.visibleAns = true;

  }

}
