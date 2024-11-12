import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; // Importando NgbActiveModal
import { ProfessionalService } from '../professional-form/professional.service';
import axios from 'axios'; // Importando axios

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() professionals: any[] = [];
  professional1: string = '';
  professional2: string = '';
  months: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  comparisonResults: any = null;

  constructor(public activeModal: NgbActiveModal, private professionalService: ProfessionalService) {}

  ngOnInit(): void {}

  compare() {
    axios.post('http://localhost:3000/api/compare', {
      professional1: this.professional1,
      professional2: this.professional2
    }).then((response: any) => {
      this.comparisonResults = response.data;
    }).catch((error: any) => {
      console.error(error);
    });
  }

  close() {
    this.activeModal.close();
  }
}
