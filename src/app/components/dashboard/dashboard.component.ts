import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from '../professional-form/professional.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  professionals: any[] = [];

  constructor(private professionalService: ProfessionalService) {}

  ngOnInit(): void {
    from(this.professionalService.getAllProfessionals()).subscribe((response: any) => {
      this.professionals = response.data;
    });
  }
}
