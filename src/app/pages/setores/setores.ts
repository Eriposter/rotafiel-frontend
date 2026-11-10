import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompanyDataService } from '../../core/services/company-data.service';

@Component({
  selector: 'app-setores',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './setores.html',
  styleUrl: './setores.css',
  imports: [RouterLink],
})
export class Setores {
  private readonly company = inject(CompanyDataService);

  protected readonly sectors = this.company.sectors;
}
