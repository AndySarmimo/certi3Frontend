export class Person{
    public idPerson : number;
    public personName :string;
    public lastName :string;
    public email :string;
    public pwd :string;
    constructor(id:number,pn:string,ln:string,email:string,pwd:string){
        this.idPerson = id;
        this.personName = pn;
        this.lastName = ln;
        this.email = email;
        this.pwd = pwd;
    }
    
}