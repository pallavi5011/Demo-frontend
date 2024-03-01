import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationSectionComponent } from '../navigation-section/navigation-section.component';
import { TournamentService } from '../../services/tournament.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationSectionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeLink: string = 'events';
  data: any
  tournaments: { name: string, startDate: Date, endDate: Date, status: string, type: string }[] = [];
  filteredTournaments: { name: string, startDate: Date, endDate: Date, status: string, type: string }[] = [];


  @Output() tournamentData = new EventEmitter<any[]>();
  constructor(private dataService: TournamentService) { }
  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
      this.tournaments = this.data['tournaments']
      this.filteredTournaments = this.tournaments
      this.tournamentData.emit(this.filteredTournaments)
    });

  }

  handleFilteredTournaments(status: string): void {
    if (status === 'events') {
      this.filteredTournaments = []
      this.filteredTournaments = this.tournaments;
    } else {
      this.filteredTournaments = []
      this.filteredTournaments = this.tournaments.filter(tournament => tournament.type === status);
    }
    this.tournamentData.emit(this.filteredTournaments)
  }

}
