import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CompanyDataService } from '../../../core/services/company-data.service';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
  styleUrl: './header.css',
  imports: [RouterLink, RouterLinkActive],
})
export class Header {
  private readonly company = inject(CompanyDataService);

  readonly companyName = this.company.companyName;
  protected readonly contact = this.company.contact;
  readonly navItems: NavItem[] = [
    { label: 'Início', path: '/' },
    { label: 'Sobre Nós', path: '/sobre' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Setores', path: '/setores' },
    { label: 'Contactos', path: '/contactos' },
  ];

  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
