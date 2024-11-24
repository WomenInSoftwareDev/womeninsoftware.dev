import { MediaMatcher } from "@angular/cdk/layout";
import {
	ChangeDetectorRef,
	Component,
	inject,
	OnDestroy,
	ViewChild,
} from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ThemeService } from "./services/theme.service";
import { DomSanitizer } from "@angular/platform-browser";

import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		RouterOutlet,
		RouterLink,
		RouterLinkActive,
		HeaderComponent,
		FooterComponent,
		MatMenuModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent implements OnDestroy {
	@ViewChild("snav") sidenav!: MatSidenav;

	mobileQuery: MediaQueryList;
	expandedNavItem: string | null = null;

	title = "womeninsoftwaredev";
	themeService = inject(ThemeService);

	navItems = [
		{
			name: "Software Developers",
			route: "home",
			icon: "developer_board",
		},
		{
			name: "Web Development",
			route: "web-development",
			icon: "developer_board",
			submenu: [
				{
					name: "Frontend",
					route: "/web-development/frontend",
					icon: "developer_board",
				},
				{
					name: "Backend",
					route: "/web-development/backend",
					icon: "developer_board",
				},
				{
					name: "Fullstack",
					route: "/web-development/fullstack",
					icon: "developer_board",
				},
			],
		},
		{
			name: "Mobile Development",
			route: "mobile-development",
			icon: "developer_board",
			submenu: [
				{
					name: "iOS",
					route: "/mobile-development/ios",
					icon: "developer_board",
				},
				{
					name: "Android",
					route: "/mobile-development/android",
					icon: "developer_board",
				},
				{
					name: "Cross-Platform",
					route: "/mobile-development/cross-platform",
					icon: "developer_board",
				},
			],
		},
		{
			name: "Game Development",
			route: "game-development",
			icon: "developer_board",
			submenu: [
				{
					name: "Unity",
					route: "/game-development/unity",
					icon: "developer_board",
				},
				{
					name: "Unreal Engine",
					route: "/game-development/unreal-engine",
					icon: "developer_board",
				},
				{
					name: "Godot",
					route: "/game-development/godot",
					icon: "developer_board",
				},
			],
		},
		{
			name: "DevOps",
			route: "devops",
			icon: "developer_board",
			submenu: [
				{
					name: "CI/CD",
					route: "/devops/ci-cd",
					icon: "developer_board",
				},
				{
					name: "Containers",
					route: "/devops/containers",
					icon: "developer_board",
				},
				{
					name: "Orchestration",
					route: "/devops/orchestration",
					icon: "developer_board",
				},
				{
					name: "Monitoring",
					route: "/devops/monitoring",
					icon: "developer_board",
				},
				{
					name: "Security",
					route: "/devops/security",
					icon: "developer_board",
				},
			],
		},
		{
			name: "Cloud Computing",
			route: "cloud-computing",
			icon: "developer_board",
			submenu: [
				{
          name: "AWS",
          route: "/cloud-computing/aws",
          icon: "developer_board",
        },
        {
          name: "Azure",
          route: "/cloud-computing/azure",
          icon: "developer_board",
        },
        {
          name: "Google Cloud",
          route: "/cloud-computing/google-cloud",
          icon: "developer_board",
        },
        {
          name: "IBM Cloud",
          route: "/cloud-computing/ibm-cloud",
          icon: "developer_board",
        },
        {
          name: "Oracle Cloud",
          route: "/cloud-computing/oracle-cloud",
          icon: "developer_board",
        },
			],
		},
    {
      name: "Cybersecurity",
      route: "/developers",
      icon: "developer_board",
      submenu: [
        {
          name: "Network Security",
          route: "/developers",
          icon: "developer_board",
        },
        {
          name: "Web Application Security",
          route: "/developers",
          icon: "developer_board",
        },
        {
          name: "Cloud Security",
          route: "/developers",
          icon: "developer_board",
        },
        {
          name: "IoT Security",
          route: "/developers",
          icon: "developer_board",
        },
        {
          name: "Incident Response",
          route: "/developers",
          icon: "developer_board",
        },
        {
          name: "Malware Analysis",
          route: "/developers",
          icon: "developer_board",
        },
        {
          name: "Computer Forensics",
          route: "/developers",
          icon: "developer_board",
        },
        {
          name: "Compliance & Governance",
          route: "/developers",
          icon: "developer_board",
        },
      ],
    },
		{
			name: "Women In Tech",
			route: "/women-in-tech",
			icon: "developer_board",
			submenu: [
				{
					name: "Data Scientists / Analysts",
					route: "/developers",
					icon: "developer_board",
				},
				{
					name: "Network / Systems Admins",
					route: "/developers",
					icon: "developer_board",
				},
				{
					name: "Mentors & Educators",
					route: "/developers",
					icon: "developer_board",
				},
				{
					name: "Content Creators",
					route: "/developers",
					icon: "developer_board",
				},
				{
					name: "Human-Computer Interaction",
					route: "/developers",
					icon: "developer_board",
				},
				{
					name: "Product / Project Managers",
					route: "/developers",
					icon: "developer_board",
				},
				{
					name: "Technical Writers",
					route: "/developers",
					icon: "developer_board",
				},
			],
		},
		{
			name: "Throughout History",
			route: "/history",
			icon: "developer_board",
		},
	];

	private _mobileQueryListener: () => void;

	constructor(
		private iconRegistry: MatIconRegistry,
		private sanitizer: DomSanitizer
	) {
		const changeDetectorRef = inject(ChangeDetectorRef);
		const media = inject(MediaMatcher);

		this.mobileQuery = media.matchMedia("(max-width: 600px)");
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);

		this.iconRegistry.addSvgIcon(
			"angular",
			this.sanitizer.bypassSecurityTrustResourceUrl("/icons/angular.svg")
		);
		this.iconRegistry.addSvgIcon(
			"angular-old",
			this.sanitizer.bypassSecurityTrustResourceUrl("/icons/angular-old.svg")
		);
		this.iconRegistry.addSvgIcon(
			"angular-material",
			this.sanitizer.bypassSecurityTrustResourceUrl(
				"/icons/angular-material.svg"
			)
		);
		this.iconRegistry.addSvgIcon(
			"primeng",
			this.sanitizer.bypassSecurityTrustResourceUrl("/icons/primeng.svg")
		);
		this.iconRegistry.addSvgIcon(
			"spartan",
			this.sanitizer.bypassSecurityTrustResourceUrl("/icons/spartan.svg")
		);
		this.iconRegistry.addSvgIcon(
			"github",
			this.sanitizer.bypassSecurityTrustResourceUrl("/icons/github.svg")
		);
	}

	toggleSubmenu(navItem: string): void {
		this.expandedNavItem = this.expandedNavItem === navItem ? null : navItem;
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}
}
