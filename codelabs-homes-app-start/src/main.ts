import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';// this gives access to route config prop which we defined

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig) // <--- Check this line
  ]
}) // Add a semicolon here
.catch(err => console.error(err)); // <--- Add a semicolon here
