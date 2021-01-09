import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';
import { NewsletterService } from '../../services/newsletter.service';
import { HttpResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public catForm: any;
  public catheading = "Request a Catalogue";
  public catsubheading = "We will send you unique designs to choose from "
  public newsForm: any;
  public newsheading = "Subscribe to our Newsletter";
  public newssubheading = "Why refuse something that's free?"

  constructor(private _catalog:CatalogService,
    private _newsletter:NewsletterService
    ) { }

  ngOnInit(): void {
  }

  createCatalog(x:NgForm):void{
    if(x.valid){
      this._catalog.postRequest(
        {
          name: x.value.name,
          email: x.value.email,
          phone: x.value.phone.toString(),
        }
      ).subscribe();
      x.reset();

      // hiding the form element
    console.log(document.getElementById("catalogForm"));
    this.catForm = document.getElementById('catalogForm');
    this.catForm.style.display = "none";
    this.catheading = "Request Sent";
    this.catsubheading = "Now leave the rest upon us. We shall send you a catalog through e-mail."
    }

  }

  createNewsletter(x:NgForm):void{
    if(x.valid){
      this._newsletter.postRequest(
        {
          email: x.value.email,
        }
      ).subscribe();
      x.reset();

      // hiding the form element
    console.log(document.getElementById("newsForm"));
    this.newsForm = document.getElementById('newsForm');
    this.newsForm.style.display = "none";
    this.newsheading = "Email Saved";
    this.newssubheading = "Now you won't miss any update from our side!"
    }

  }


}
