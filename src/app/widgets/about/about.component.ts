import { Component, OnInit } from '@angular/core';
import {PageActionsService} from './../../services/page-actions.service';
@Component({
  selector: 'widget-about',
  templateUrl: './about.component.html',
  styleUrls: ['./../../../assets/css/stylesAbout.css']
})
export class AboutComponent implements OnInit {

  public teams: any;
  public advisors: any;
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
                		position: "MARKETING",
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
            		position: "TECHNICAL ADVISOR",
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
            	}
            ];
  }

  close(e) {
  	e.preventDefault()
  	this.pageAction.setAction('close_about')
  }
}
