import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompanyDataService } from '../../core/services/company-data.service';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [RouterLink],
})
export class Home {
  private readonly company = inject(CompanyDataService);

  protected readonly stats = this.company.stats;
  protected readonly services = this.company.services;
  protected readonly sectors = this.company.sectors;
  protected readonly processSteps = this.company.processSteps;
}
