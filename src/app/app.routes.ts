import { Routes } from '@angular/router';
import { DevelopersComponent } from './components/developers/developers.component';
import { WomenInTechComponent } from './components/women-in-tech/women-in-tech.component';
import { HistoryComponent } from './components/pages/history/history.component';
import { AboutComponent } from './components/pages/about/about.component';
import { FqaComponent } from './components/pages/fqa/fqa.component';

export const routes: Routes = [
  { path: 'home', component: DevelopersComponent },
  { path: 'women-in-tech', component: WomenInTechComponent },
  { path: 'history', component: HistoryComponent},
  { path: 'fqa', component: FqaComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "**", redirectTo: "home", pathMatch: "full"}
];
