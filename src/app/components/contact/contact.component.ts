import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { HttpResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public link: string;
  public f: any;
  public formheading = "Drop us a message";
  public subheading = "We are here to answer any question you may have"

  constructor(private mail:EmailService) { }

  ngOnInit(): void {
  }


  formSubmit(x: NgForm): void{
    // sending mail
    if(x.valid){
      this.mail
    .postQuery({
        name: x.value.name,
        email: x.value.email,
        phone: x.value.phone.toString(),
        message: x.value.message
    }).subscribe();
    x.reset();

    // hiding the form element
    console.log(document.getElementById("queryForm"));
    this.f = document.getElementById('queryForm');
    this.f.style.display = "none";
    this.formheading = "Message sent";
    this.subheading = "Now leave the rest upon us. We shall contact you very soon."
    }

  }
}
