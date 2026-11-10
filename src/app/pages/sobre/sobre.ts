import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompanyDataService } from '../../core/services/company-data.service';

@Component({
  selector: 'app-sobre',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
  imports: [RouterLink],
})
export class Sobre {
  private readonly company = inject(CompanyDataService);

  protected readonly values = this.company.values;
  protected readonly stats = this.company.stats;
  protected readonly sectors = this.company.sectors;
}
