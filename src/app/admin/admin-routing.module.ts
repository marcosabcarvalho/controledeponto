import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AtualizacaoComponent } from './components/atualizacao/atualizacao.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ListagemComponent } from './components/listagem/listagem.component';
import { AdminComponent } from './components/admin.component';

import { AdminGuard } from './services/admin-guard.service';

export const AdminRoutes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
    canActivate: [AdminGuard],
		children: [
		  {
			path: '',
			component: ListagemComponent
		  },
		  {
			path: 'cadastro',
			component: CadastroComponent
		  },
		  {
			path: 'atualizacao/:lancamentoId',
			component: AtualizacaoComponent
		  }
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(AdminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}
