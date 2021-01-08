import { Component, OnInit } from '@angular/core';
// import { FooterComponent } from 'app/components/footer/footer.component';
import { TestimonialsService } from '../../services/testimonials.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  objects = [];
  constructor(private testiservice: TestimonialsService) { }

  ngOnInit(): void {
    this.testiservice.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.objects = data;
    })
  }

}
