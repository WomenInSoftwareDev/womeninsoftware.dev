import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  features = [
    { name: 'Feature 1', description: 'A directory showcasing women in Software Development.' },
    { name: 'Feature 2', description: 'Resources for learning Software and Web Development, covering Frontend, Backend and Fullstack technologies, best practices and more.' },
    { name: 'Feature 3', description: 'A "Women in Tech" submenu featuring additional fields beyond software development.' },
    { name: 'Feature 4', description: 'Insights, articles, and tutorials tailored for women in software engineering and technology.' },
  ];
}
