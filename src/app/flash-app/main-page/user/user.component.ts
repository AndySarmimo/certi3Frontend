import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person.model';
import { ModalService } from 'src/app/shared/modal/modal.service';

import { FlashcardService } from '../../services/flashcard.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() sendPerson = new EventEmitter<any>();
  personIS : Person |undefined;

  name : string = "";
  lastName : string = "";
  emailPerson : string = "";
  pwdPerson : string = "";
  pwdPerson2 : string = "";
  varCrearCuenta = false;




  constructor(public modalService: ModalService , private flashService: FlashcardService , public sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
  }

  getPerson(email:any,pwd:any){
    this.flashService.getPersonEmail(email,pwd).subscribe((res) =>{
      
      console.log("recibi res", res)
      this.pasarHome(res);

    },(error)=> {console.log("hubo error")});

  }
  savePerson(body:any){
    this.flashService.savePerson(body).subscribe((res) =>{
      
      console.log("todo ok guardado");
      alert("Cuenta iniciada correctamente, inicie sesion");
    },(error)=> {console.log("hubo error")});

  }

  iniciarSesion(){

    console.log(this.emailPerson , "    " , this.pwdPerson)
    this.getPerson(this.emailPerson,this.pwdPerson);

  }

  pasarHome(res:any){
    this.personIS = res[0];
    
    if( res[0] != undefined){
      console.log(this.personIS)
      this.sessionService.setSessionUser(this.personIS);
      console.log("llego person");
      this.router.navigate(['/home']);
    }
    else{
      alert("No existe cuenta o contraseña incorrecta");
    }
  }
  crearCuenta(){
    if(this.varCrearCuenta){
      if(this.pwdPerson == this.pwdPerson2){
        var newPerson = JSON.stringify({personName:this.name, lastName : this.lastName, email: this.emailPerson, pwd: this.pwdPerson});
        this.savePerson(JSON.parse(newPerson));
        this.varCrearCuenta = !this.varCrearCuenta;
      }
      else{
        alert("Contraseñas no son iguales");
      }
    }
    else{
      this.varCrearCuenta = !this.varCrearCuenta;
    }
    
  }
  cancelarCrearCuenta(){
    this.varCrearCuenta = false;
    this.name="";
    this.lastName = "";
    this.emailPerson = "";
    this.pwdPerson = "";
    this.pwdPerson2 = "";
  }
}
