import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { InventarioApiService } from 'src/app/services/inventario-api.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public usuario = new Usuario(0,0,"","","","","","");

  constructor(
    private router : Router,
    private usuario_service : UsuarioService,
    private inventarioService: InventarioApiService
  ) { }

  ngOnInit(): void {
    
  }

  login(){
    //alert("entro");
    //this.usuario_service.login(this.usuario).subscribe();
    this.inventarioService.getCuentaList().subscribe
    (
      (result : any) => 
      {
      var cuentas = result;
      console.log(result);
      var finded = cuentas.find((usr : any) => usr.usuario == this.usuario.usuario && usr.password == this.usuario.password)
      console.log(finded);
      if(finded)
      {
        alert("entro");
        this.router.navigate(["Inventario"])
      }
    }
    )
    
  }

}
