import { Component } from '@angular/core';
import { ProfessionalService } from './professional.service';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-professional-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './professional-form.component.html',
  styleUrls: ['./professional-form.component.scss']
})
export class ProfessionalFormComponent {
  name: string = '';
  email: string = '';
  monthlyRevenue: number = 0;
  goal: number = 0;

  constructor(private professionalService: ProfessionalService) {}

  onSubmit() {
    const newProfessional = {
      name: this.name,
      email: this.email,
      monthlyRevenue: this.monthlyRevenue,
      goal: this.goal,
    };

    from(this.professionalService.addProfessional(newProfessional)).subscribe(
      (response) => {
        alert('Profissional cadastrado com sucesso!');
      },
      (error) => {
        alert('Erro ao cadastrar profissional!');
      }
    );
  }
}
