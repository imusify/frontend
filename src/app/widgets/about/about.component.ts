import { Component, OnInit } from '@angular/core';
import { PageActionsService } from './../../services/page-actions.service';

@Component({
  selector: 'widget-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public teams: any;
  public advisors: any;
  public artists:any;
  public executives:any;
  slackMember:number=189;
  constructor(
    private pageAction: PageActionsService
  	) { }
ngOnInit() {
    this.teams = [{
                		picture: "./../../../assets/images/peoples/1.jpg",
                		described: "David Walters Founder CEO",
                		name: "DAVID WALTERS",
                		position: "CEO & Founder",
                		linkedin: "https://www.linkedin.com/in/1davidwalters/",
                		github: "https://github.com/DavidWalters123"
                	},
                	{
                		picture: "./../../../assets/images/peoples/6.jpg",
                		described: "",
                		name: "Gijs Verheijke",
                		position: "Business Development",
                		linkedin: "https://www.linkedin.com/in/gverheijke",
                		github: ""
                	},
                	{
                		picture: "./../../../assets/images/peoples/7.jpg",
                		described: "",
                		name: "BASIT RAZA",
                		otherName: "aka Geek",
                		position: "Developer",
                		linkedin: "https://www.linkedin.com/in/basitraza1/",
                		github: "https://github.com/geek96"
                	},
                	{
                		picture: "./../../../assets/images/peoples/5.jpg",
                		described: "",
                		name: "CHRIS HAGER",
                		otherName: "aka Metachris",
                		position: "Blockchain Developer",
                		linkedin: "https://www.linkedin.com/in/hagerchristian/",
                		github: "https://github.com/metachris"
					},
					{
						picture: "./../../../assets/images/peoples/16.jpg",
                		described: "",
                		name: "Jean-Marc Fisz",
                		position: "Project Management",
                		linkedin: "https://www.linkedin.com/in/jean-marc-fisz-38573b80/?locale=en_US"
					},
                	{
                		picture: "./../../../assets/images/peoples/15.jpg",
                		described: "",
                		name: "Marcelo Ferreira",
                		position: "Cyber Security",
                		linkedin: "https://www.linkedin.com/in/fmarcelo/",
                		github: "https://github.com/ferreiramarcelo"
                	},
                	{
                		picture: "./../../../assets/images/peoples/9.jpg",
                		described: "",
                		name: "Nataly Chigireva",
                		position: "Marketing",
                		linkedin: "https://www.linkedin.com/in/nataliachigireva/",
                		github: ""
                	},
                	{
                		picture: "./../../../assets/images/peoples/3.jpg",
                		described: "",
                		name: "NHAN TRAN",
                		position: "Developer",
                		linkedin: "",
                		github: "https://github.com/thanhnhan290488"
                	},
                	{
                		picture: "./../../../assets/images/peoples/2.jpg",
                		described: "",
                		name: "EVA PREGER",
                		position: "Business Developer",
                		linkedin: "https://www.linkedin.com/in/eva-preger-728017153/",
                		github: ""
                	},
                	{
                		picture: "./../../../assets/images/peoples/13.jpg",
                		described: "",
                		name: "NITESH MAHESHWARI",
                		position: "Marketing",
                		linkedin: "https://www.linkedin.com/in/nitesh-maheshwari-b0110963/",
                		github: ""
                	}
                ];
    this.advisors = [{
            		picture: "./../../../assets/images/peoples/14.jpg",
            		described: "",
            		name: "Istvan Szukacs",
            		position: "Technical Advisor",
            		linkedin: "https://www.linkedin.com/in/iszukacs/",
            		github: "https://github.com/l1x"
            	},
            	{
            		picture: "./../../../assets/images/peoples/11.jpg",
            		described: "",
            		name: "VINCENT CASTELLUCCI",
            		position: "Music Industry Advisor",
            		linkedin: "https://www.linkedin.com/in/vicastellucci/",
            		github: ""
            	},
            	{
            		picture: "./../../../assets/images/peoples/12.jpg",
            		described: "",
            		name: "WAYNE CHICO PITTMAN",
            		position: "Advisor",
            		linkedin: "https://www.linkedin.com/in/wayne-chico-pittman-5aaa5b16/",
            		github: ""
            	},
            	{
            		picture: "./../../../assets/images/peoples/4.jpg",
            		described: "",
            		name: "ALEKSEY GUDKOV",
            		position: "Blockchain Legal Advisor",
            		linkedin: "https://www.linkedin.com/in/agudkov/",
            		github: ""
            	},
            	{
            		picture: "./../../../assets/images/peoples/8.jpg",
            		described: "",
            		name: "Michael P. Dohnke",
            		position: "Legal Advisor",
            		linkedin: "",
            		github: ""
            	},
            	{
            		picture: "./../../../assets/images/peoples/17.jpg",
            		described: "",
            		name: "Brenn Hill",
            		position: "Blockchain Advisor",
            		linkedin: "https://www.linkedin.com/in/brennhill/",
            		github: "https://github.com/brennhill"
            	}
			];
	this.artists = [
		{
			image:"./../../../assets/images/about/prod-ab-ico.svg",
			name: "MUSIC PRODUCERS"
		},
		{
			image:"./../../../assets/images/about/beat-ab-ico.svg",
			name: "BEATMAKERS"
		},
		{
			image:"./../../../assets/images/about/djs-ab-ico.svg",
			name: "DJS"
		},
		{
			image:"./../../../assets/images/about/turn-ab-ico.svg",
			name: "TURNTABLISTS"
		},
		{
			image:"./../../../assets/images/about/curat-ab-ico.svg",
			name: "CURATORS"
		},
		{
			image:"./../../../assets/images/about/singers-ab-ico.svg",
			name: "SINGERS"
		},
		{
			image:"./../../../assets/images/about/rapp-ab-ico.svg",
			name: "RAPPERS"
		},
		{
			image:"./../../../assets/images/about/vocal-ab-ico.svg",
			name: "VOCALISTS"
		},
		{
			image:"./../../../assets/images/about/speak-ab-ico.svg",
			name: "SPEAKERS"
		},
		{
			image:"./../../../assets/images/about/beatbox-ab-ico.svg",
			name: "BEATBOXERS"
		},
		{
			image:"./../../../assets/images/about/compos-ab-ico.svg",
			name: "COMPOSERS"
		},
		{
			image:"./../../../assets/images/about/songwrite-ab-ico.svg",
			name: "SONGWRITERS"
		}
	];
	this.executives = [
		{
			image:"./../../../assets/images/about/a_rs-ab-ico.svg",
			name: "A&Rs"
		},
		{
			image:"./../../../assets/images/about/labels-ab-ico.svg",
			name: "LABELS"
		},
		{
			image:"./../../../assets/images/about/publish-ab-ico.svg",
			name: "PUBLISHERS"
		},
		{
			image:"./../../../assets/images/about/manag-ab-ico.svg",
			name: "MANAGERS"
		},
		{
			image:"./../../../assets/images/about/book-ab-ico.svg",
			name: "BOOKERS"
		},
		{
			image:"./../../../assets/images/about/ditrib-ab-ico.svg",
			name: "DISTRIBUTERS"
		},
		{
			image:"./../../../assets/images/about/record-ab-ico.svg",
			name: "RECORDING STUDIOS"
		},
		{
			image:"./../../../assets/images/about/film-ab-ico.svg",
			name: "FILM PRODUCER"
		},
		{
			image:"./../../../assets/images/about/vert-ab-ico.svg",
			name: "ADVERTISING AGENCIES"
		},
		{
			image:"./../../../assets/images/about/supervis-ab-ico.svg",
			name: "MUSIC SUPERVISORS"
		},
		{
			image:"./../../../assets/images/about/filmcut-ab-ico.svg",
			name: "FILM CUTTERS"
		},
		{
			image:"./../../../assets/images/about/lawyer-ab-ico.svg",
			name: "LAWYERS"
		},
		{
			image:"./../../../assets/images/about/event-ab-ico.svg",
			name: "EVENT MANAGERS"
		},
		{
			image:"./../../../assets/images/about/bands2-ab-ico.svg",
			name: "GAME DEVELOPERS"
		}
	];
  }

  close(e) {
  	e.preventDefault()
  	this.pageAction.setAction('close_about')
  }
}
