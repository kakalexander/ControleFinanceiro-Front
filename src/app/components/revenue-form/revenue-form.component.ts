import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-revenue-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './revenue-form.component.html',
  styleUrls: ['./revenue-form.component.scss']
})
export class RevenueFormComponent {
  professionalId: string = '';
  monthlyRevenue: number = 0;

  onSubmit() {
    // Aqui você faria a lógica para atualizar o faturamento no banco.
    alert('Faturamento atualizado!');
  }
}
