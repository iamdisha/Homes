import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  //url='http://localhost:3000/locations';
  protected housingLocationList: HousingLocation[]=[
    {
            
      "id": 0,
      "name": "Acme Fresh Start Housing",
       "city": "Faridabad",
     "state": "Haryana",
    "photo": "/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      "availableUnits": 4,
     "wifi": true,
      "laundry": true
    },
    {
      "id":1,
      "name": "A113 Transitional Housing",
      "city": "Faridabad",
     "state": "Haryana",
      "photo": "/assets/brandon-griggs-wR11KBaB86U-unsplash.jpg",
      "availableUnits": 0,
     "wifi": false,
      "laundry": true
    },
    {
      "id": 2,
      "name":" Warm Beds Housing Support",
      "city": "Gurugram",
      "state":" Haryana",
     "photo": "/assets/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
      "availableUnits": 1,
      "wifi": false,
     "laundry": false
    },
    {
      "id": 3,
      "name": "Homesteady Housing",
     "city": "Delhi",
    "state": "Delhi",
     "photo": "/assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
      "availableUnits": 1,
     "wifi": true,
      "laundry": false
    },
    {
     "id": 4,
     "name": "Happy Homes Group",
      "city": "Noida",
      "state": "Uttar Pradesh",
      "photo": "/assets/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
     "availableUnits": 1,
      "wifi": true,
      "laundry": false
    },
    {
      "id": 5,
      "name": "Hopeful Apartment Group",
      "city": "Noida",
      "state": "Uttar Pradesh",
     "photo": "/assets/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
     "availableUnits": 2,
      "wifi": true,
    "laundry": true
    },
    {
      "id":6,
      "name": "Seriously Safe Towns",
      "city": "Gurugram",
      "state": "Haryana",
      "photo": "/assets/phil-hearing-IYfp2Ixe9nM-unsplash.jpg",
      "availableUnits": 5,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 7,
      "name": "Hopeful Housing Solutions",
      "city": "Faridabad",
      "state": "Haryana",
      "photo": "/assets/r-architecture-GGupkreKwxA-unsplash.jpg",
      "availableUnits": 2,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 8,
     "name": "Seriously Safe Towns",
      "city": "Extended Faridabad( BPTP)",
      "state": "Faridabad",
      "photo": "/assets/saru-robert-9rP3mxf8qWI-unsplash.jpg",
      "availableUnits": 10,
      "wifi": false,
     "laundry": false
    },
    {
      "id":9,
     "name": "Capital Safe Towns",
      "city": "Delhi",
      "state": "Delhi",
      "photo": "/assets/webaliser-_TPTXZd9mOo-unsplash.jpg",
      "availableUnits": 6,
    "wifi": true,
      "laundry": true
    
  }

  ];


 

  constructor() { }
  getAllHousingLocations() : HousingLocation[] {
    return this.housingLocationList;
   
  }
   getHousingLocationbyId(id: Number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation=> housingLocation.id===id);
   

  }
  submitApplication(firstName: string, lastName: string, email:string){
    console.log(firstName, lastName, email);
  }
}
