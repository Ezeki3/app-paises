import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    // ruta principal al entrar a la aplicacion
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full'
  },
  {
    // cuando entre al componente region es lo que va a mostrar
    path: 'region',
    component: PorRegionComponent
  },
  {
    path: 'capital',
    component: PorCapitalComponent
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent
  },
  {
    // en caso de que navegue a hacia una pagina que no exista rediriguir al home o en este caso a la ruta principal
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    // para usar las rutas definidas
    RouterModule.forRoot(routes)
  ],
  exports: [
    // se exporta para poder usarlo
    RouterModule
  ]
})

export class AppRoutingModule { }