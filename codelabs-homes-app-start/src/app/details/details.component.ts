import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: `
<article>
 <img class="listing-photo" [src]="housingLocation?.photo">
 <section class="listing-description">
 <h2 class="listing-heading">{{housingLocation?.name}}</h2>
 <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
 </section>
 <section class="listing-features">
 <h2 class="section-heading">About this housing Location</h2>
 <ul>
 <li>Units available: {{housingLocation?.availableUnits}}</li>
 <li>Does this location has wifi: {{housingLocation?.wifi}}</li>
 <li>Does this location has laundry: {{housingLocation?.laundry}}</li>
 </ul>

 </section>
 <section class="listing-apply">
 <h2 class="section-heading">Apply now to live here</h2>
 <form [formGroup]="applyForm" (submit)="submitApplication()">
   <label for="first-name">FirstName</label>
   <input id="first-name" type="text" formControlName="firstName">
   <label for="last-name">LastName</label>
   <input id="last-name" type="text" formControlName="lastName">
   <label for="email">Email</label>
    <input id="email" type="email" formControlName="email">
    <button type="Submit" class="primary" (click)="showPopup()">Appy Now!</button>
    </form>
 </section>
  <!-- Popup message -->
  <div *ngIf="isPopupVisible" class="popup">
    <p>Thanks for applying!</p>
    <br>
    <p>We will get back to you soon:)</p>
    <button (click)="closePopup()">Close</button>
  </div>
 </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute= inject(ActivatedRoute);// It's often used to get details about the route that is currently active in the application.
  //adding referance to service
  housingService=inject(HousingService);
  housingLocation: HousingLocation | undefined;
  isPopupVisible = false;
  //form group represents collection of form controls that make up a form
  applyForm= new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
    
  });
  housingLocationId=0;
  constructor(){
    const housingLocationId= Number(this.route.snapshot.params['id']);
    this.housingLocation=this.housingService.getHousingLocationbyId(housingLocationId);
    
  }
  submitApplication(){
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',// to access values we used value property ??  value on lhs null undefined value om right used
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''

    );
  }
  showPopup(): void {
    this.isPopupVisible = true;
    // Optional: Automatically close the popup after a few seconds
    setTimeout(() => {
      this.isPopupVisible = false;
    }, 3000); // Closes after 3 seconds
  }

  closePopup(): void {
    this.isPopupVisible = false;
  }



}
 