import { Component } from '@angular/core';
import { PetProfile } from '../model/pet-profile';
import { PetCardsComponent } from '../pet-cards/pet-cards.component';

@Component({
  selector: 'app-cats',
  standalone: true,
  imports: [
    PetCardsComponent
  ],
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.scss'
})
export class CatsComponent {
  petCards: PetProfile[] = [];
  exDogCard = {
    id: 1,
    name: "LadyCat",
    age: "2 YO",
    imageUrl: "",
    bio: "My name is LadyCat and I just want a forever loving home"
  }

  constructor() {
    let card = this.exDogCard;
    this.petCards.push(card);
    card.id = 2;
    this.petCards.push(card);
    card.id = 3;
    this.petCards.push(card);
    card.id = 4;
    this.petCards.push(card);
    card.id = 5;
    this.petCards.push(card);
    card.id = 6;
    this.petCards.push(card);
  }
}