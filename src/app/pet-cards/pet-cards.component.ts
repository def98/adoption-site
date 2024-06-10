import { Component, Input } from '@angular/core';
import { PetProfile } from '../model/pet-profile';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-pet-cards',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './pet-cards.component.html',
  styleUrl: './pet-cards.component.scss',
})
export class PetCardsComponent {
  @Input() petCards: PetProfile[] = [];
  exDogCard = {
    id: 1,
    name: "JoeDog",
    age: "3 YO",
    imageUrl: "",
    bio: "My name is JoeDog and I just want a forever loving home",
    source: ""
  }
  isOpen = false;

  constructor() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}