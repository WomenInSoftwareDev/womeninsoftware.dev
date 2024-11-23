import { Component } from '@angular/core';

import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-fqa',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './fqa.component.html',
  styleUrl: './fqa.component.scss'
})
export class FqaComponent {

  faqs = [
    {
      question: 'What is WomenInSoftware.dev?',
      answer: `WomenInSoftware.dev is an open-source project dedicated to showcasing and celebrating the achievements of women in Software Development. It serves as a resource for learning frontend, backend and fullstack technologies, while also providing a platform to inspire more women to enter and thrive in the field of software development and engineering.`,
    },
    {
      question: 'Is it free to add a profile to WomenInSoftware.dev?',
      answer: `Yes, adding a profile is completely free. WomenInSoftware.dev is an open-source project committed to promoting diversity in tech without any cost to participants.`,
    },
    {
      question: 'How do I add a profile to WomenInSoftware.dev?',
      answer: `Adding a profile is easy! Visit our GitHub repository and follow the instructions in the <a href="https://github.com/WomenInSoftwareDev/womeninsoftware.dev/CONTRIBUTING.md" target="_blank">CONTRIBUTING.md</a> file. Provide all the necessary information, adhere to the guidelines, and submit a Pull Request to have your profile added.`,
    },
    {
      question: 'How can I update or remove my profile?',
      answer: `To update your profile, submit a Pull Request with the updated details to our GitHub repository, following the <a href="https://github.com/WomenInSoftwareDev/womeninsoftware.dev/CONTRIBUTING.md" target="_blank">CONTRIBUTING.md</a> guidelines. If you wish to remove your profile, submit an issue on the <a href="https://github.com/WomenInSoftwareDev/womeninsoftware.dev" target="_blank">GitHub repository</a>, providing your profile details and reason for removal.`,
    },
    {
      question: 'What resources are available on WomenInSoftware.dev?',
      answer: `WomenInSoftware.dev provides resources for learning Software Development, including guides and tutorials for frontend, backend and fullstack technologies. It also features a directory of women professionals in software development and engineering, as well as a submenu for <strong>Women in Tech</strong> that highlights additional fields in technology.`,
    },
    {
      question: 'How can I contribute to WomenInSoftware.dev?',
      answer: `You can contribute by adding profiles, improving the codebase, or helping with content and resources. Visit our <a href="https://github.com/WomenInSoftwareDev/womeninsoftware.dev/CONTRIBUTING.md" target="_blank">CONTRIBUTING.md</a> file for details on how to get involved. We welcome contributions from developers, designers, writers, and anyone passionate about promoting diversity in tech.`,
    },
    {
      question: 'What if I find incorrect or inappropriate information?',
      answer: `If you encounter any incorrect or inappropriate information, please report it through our <a href="https://github.com/WomenInSoftwareDev/womeninsoftware.dev/issues" target="_blank">GitHub issues</a>  or contact us directly. We strive to ensure all content is accurate and respectful, and we appreciate your help in maintaining a positive community.`,
    },
  ];
}
