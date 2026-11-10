import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompanyDataService } from '../../core/services/company-data.service';

@Component({
  selector: 'app-servicos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './servicos.html',
  styleUrl: './servicos.css',
  imports: [RouterLink],
})
export class Servicos {
  private readonly company = inject(CompanyDataService);

  protected readonly services = this.company.services;
  protected readonly processSteps = this.company.processSteps;
}
