import { Component } from '@angular/core';
import { HeaderComponent } from '../../Component/header/header.component';
import { NavigationSectionComponent } from '../../Component/navigation-section/navigation-section.component';
import { CardComponent } from '../../Component/card/card.component';
import { TournamentService } from '../../services/tournament.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,NavigationSectionComponent,CardComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  data :any
  tournaments: { name: string, startDate: Date, endDate: Date, status: string }[] = [];
  filteredTournaments: { name: string, startDate: Date, endDate: Date, status: string, type: string }[] = [];

  constructor(private dataService: TournamentService) { }

  handleTournaments(filteredTournaments: any[]){
    this.filteredTournaments = []
    this.filteredTournaments = filteredTournaments;
  }
}