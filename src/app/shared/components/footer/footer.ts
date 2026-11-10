import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompanyDataService } from '../../../core/services/company-data.service';

interface FooterLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  imports: [RouterLink],
})
export class Footer {
  private readonly company = inject(CompanyDataService);

  readonly companyName = this.company.companyName;
  protected readonly contact = this.company.contact;
  readonly currentYear = new Date().getFullYear();

  protected readonly quickLinks: FooterLink[] = [
    { label: 'Início', path: '/' },
    { label: 'Sobre Nós', path: '/sobre' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Setores de Actividade', path: '/setores' },
    { label: 'Contactos', path: '/contactos' },
  ];

  protected readonly serviceLinks: FooterLink[] = [
    { label: 'Identificação de Necessidades', path: '/servicos' },
    { label: 'Consulta a Fornecedores', path: '/servicos' },
    { label: 'Coordenação de Aquisição', path: '/servicos' },
    { label: 'Provisionamento Industrial', path: '/servicos' },
    { label: 'Fornecimento de Materiais', path: '/servicos' },
  ];
}
