import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { InventarioApiService } from 'src/app/services/inventario-api.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { Notify } from 'notiflix';
import * as Notiflix from 'notiflix';
import { timeout } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public usuario = new Usuario(0,0,"","","","","","");
  public finded1: Array<any>=[];
  public finded2: Array<any>=[];

  constructor(
    private router : Router,
    private usuario_service : UsuarioService,
    private inventarioService: InventarioApiService
  ) { }

  ngOnInit(): void {
    this.cargaPrincipal();
    this.escuchaCuenta();
  }
  escuchaCuenta()
  {
    this.inventarioService.getCuentaList().subscribe(data => {
      console.log(data);
    })
  }

  cargaPrincipal(){
    Notiflix.Loading.standard('Loading...');
    Notiflix.Loading.change('Loading 100%');
    //Notiflix.Notify.success('Sol lucet omnibus');
    //Notiflix.Notify.failure('Qui timide rogat docet negare');
    //Notiflix.Notify.warning('Memento te hominem esse');
    //Notiflix.Notify.info('Cogito ergo sum');
    //Notiflix.Loading.hourglass();
    //Notiflix.Loading.circle();
    //Notiflix.Loading.arrows();
    //Notiflix.Loading.dots();
    //Notiflix.Loading.pulse();

    Notiflix.Loading.remove(1000);
  }
  
  login()
  {
    //alert("entro");
    //this.usuario_service.login(this.usuario).subscribe();
    this.inventarioService.getCuentaList().subscribe
    (
      (result : any) => 
      {
          var cuentas = result;
          //console.log(result);
          //this.finded1 = cuentas.find((usr : any) => usr.Usuario == this.usuario.usuario && usr.Contrasenia == this.usuario.contra);
          this.finded1 = cuentas.find((usr : any) => usr.Usuario == this.usuario.usuario);
          this.finded2 = cuentas.find((usr : any) => usr.Contrasenia == this.usuario.contra);
          //console.log(this.finded1);
          //console.log(this.finded2);
          if(this.finded1 && this.finded2)
          {
            Notiflix.Report.success('Logueo exitoso', 'Presione continuar para acceder al inventario', 'Continuar');
            Notify.success('😃 Ha logueado exitosamente 🐇')
            this.router.navigate(["home"])
          }
          else
          {
            Notiflix.Report.failure(
              'ERROR',
              'El Usuario o Contraseña es incorrecto',
              'Intentar de nuevo',
              function cb() {
                // callback
              },
              {
                width: '360px',
                svgSize: '120px',
              },
            );
            Notify.failure('😰 Error al loguear, verifique usuario o contraseña 🐰')
          }
      }
    )
  }


}
