import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentService } from '../../services/tournament.service';
@Component({
  selector: 'app-navigation-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-section.component.html',
  styleUrl: './navigation-section.component.scss'
})
export class NavigationSectionComponent {
  activeLink: string = 'events';
  data: any
  tournaments: { name: string, startDate: Date, endDate: Date, status: string, type: string }[] = [];

  @Output() type = new EventEmitter<string>();
  constructor(private dataService: TournamentService) { }

  setActiveLink(link: string): void {
    this.activeLink = link;
    this.type.emit(link);
  }
}
