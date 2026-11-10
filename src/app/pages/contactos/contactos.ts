import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompanyDataService } from '../../core/services/company-data.service';

interface ContactForm {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contactos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contactos.html',
  styleUrl: './contactos.css',
  imports: [FormsModule],
})
export class Contactos {
  private readonly company = inject(CompanyDataService);

  protected readonly contact = this.company.contact;

  protected readonly form = signal<ContactForm>({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'Pedido de cotação',
    message: '',
  });

  protected readonly submitted = signal(false);

  protected readonly subjects = [
    'Pedido de cotação',
    'Identificação de necessidades',
    'Consulta a fornecedores',
    'Coordenação de aquisição',
    'Outro assunto',
  ];

  protected onFieldChange(field: keyof ContactForm, value: string): void {
    this.form.update((current) => ({ ...current, [field]: value }));
  }

  protected onSubmit(): void {
    const data = this.form();
    const valid = data.name.trim() !== '' && data.email.trim() !== '' && data.message.trim() !== '';
    if (!valid) {
      return;
    }
    // TODO: integrar com backend / serviço de e-mail quando disponível.
    this.submitted.set(true);
  }

  protected resetForm(): void {
    this.submitted.set(false);
    this.form.set({
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: 'Pedido de cotação',
      message: '',
    });
  }
}
