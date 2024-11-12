import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from '../professional-form/professional.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {
  professionals: any[] = [];
  selectedProfessional: string = '';
  months: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  faturamento: { [key: string]: number } = {};

  constructor(private professionalService: ProfessionalService) {}

  ngOnInit(): void {
    this.professionalService.getAllProfessionals().subscribe(
      (data: any) => {
        this.professionals = data;
      },
      (error: any) => {
        console.error('Erro ao obter profissionais:', error);
      }
    );
  }

  onSubmit(): void {
    this.professionalService.saveFaturamento(this.selectedProfessional, this.faturamento).subscribe(
      (response: any) => {
        console.log('Faturamento salvo com sucesso', response);
      },
      (error: any) => {
        console.error('Erro ao salvar faturamento:', error);
      }
    );
  }
}
