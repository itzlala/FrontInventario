import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { InventarioApiService } from 'src/app/services/inventario-api.service';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public usuario = new Usuario(0,0,"","","","","","");

  constructor(
    private usuario_service : UsuarioService,
    private inventarioService: InventarioApiService
  ) { }

  ngOnInit(): void {
    
  }

  login(){
    
    this.usuario_service.login(this.usuario).subscribe();
    this.inventarioService.getCuentaList().subscribe(result => {
      var cuentas = result.cuentas

      var finded = cuentas.find(usr => usr.usuario == this.usuario.usuario && usr.password == this.usuario.password)
      if(finded){
        //this.route.navigate('/dashboard')
      }
    })
    
  }

}
