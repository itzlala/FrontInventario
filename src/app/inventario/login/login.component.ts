import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public usuario = new Usuario(0,0,"","","","","","");

  constructor(
    private usuario_service : UsuarioService
  ) { }

  ngOnInit(): void {
    
  }

  login(){
    this.usuario_service.login(this.usuario).subscribe();
  }

}
