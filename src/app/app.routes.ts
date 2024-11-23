import { Routes } from '@angular/router';
import { DevelopersComponent } from './components/developers/developers.component';
import { WomenInTechComponent } from './components/women-in-tech/women-in-tech.component';
import { OpenSourceComponent } from './components/open-source/open-source.component';
import { HistoryComponent } from './components/pages/history/history.component';
import { AboutComponent } from './components/pages/about/about.component';
import { FqaComponent } from './components/pages/fqa/fqa.component';

export const routes: Routes = [
  { path: '', component: DevelopersComponent },
  { path: 'women-in-tech', component: WomenInTechComponent },
  { path: 'open-source', component: OpenSourceComponent },
  { path: 'history', component: HistoryComponent},
  { path: 'fqa', component: FqaComponent },
  { path: 'about', component: AboutComponent },
  { path: "**", redirectTo: "", pathMatch: "full"}
];
