import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
 // template:"<p>empleado!</p>",
  styleUrls: ['./empleado.component.css']
 // styles:["p{background-color:red;}"]
})
export class EmpleadoComponent implements OnInit {

        nombre = "jean";

        apellido="caceres";

      /* private edad=17;*/
        edad=17;

      empresa="Computer programmer";


    /*  cambiaEmpresa(event:Event){


        this.empresa=(<HTMLInputElement> event.target).value;


      }*/



      /*   getEdad(){
          return this.edad;
        }*/

      /*llamaEmpresa(value:string){

        }
      */

      //habilitacionCuadro=true;
      habilitacionCuadro=false;

     // usuRegistrado= false;
      usuRegistrado= true;

      usuNoRegistrado= true;

      textoDeRegistro="Usuario No registrado";



getRegistroUsuario(){

 // this.usuRegistrado=true;
  this.usuRegistrado=false;

}

setUsuarioRegistrado(event:Event){

//alert ("Usuario Registrado");

//this.textoDeRegistro="El usuario se acaba de registrar";

if((<HTMLInputElement> event.target).value=="SI"){

  this.textoDeRegistro="El usuario se acaba de registrar";
  //alert ("Usuario Registrado");

}else{

      this.textoDeRegistro="Usuario no registrado";
      //alert ("Usuario no  Registrado");
    
}
}



  



  constructor() { }

  ngOnInit(): void {
  }

}