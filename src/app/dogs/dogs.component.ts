import { Component } from '@angular/core';
import { PetProfile } from '../model/pet-profile';
import { PetCardsComponent } from '../pet-cards/pet-cards.component';

@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [
    PetCardsComponent
  ],
  templateUrl: './dogs.component.html',
  styleUrl: './dogs.component.scss'
})
export class DogsComponent {
  
  petCards: PetProfile[] = [];
  exDogCard = {
    id: 1,
    name: "JoeDog",
    age: "3 YO",
    imageUrl: "",
    bio: "My name is JoeDog and I just want a forever loving home"
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
