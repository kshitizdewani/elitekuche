import { Component, OnInit } from '@angular/core';
// import * as pics from 'src/assets/img/kitchen';
// src\assets\img

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  assetImages = [
    '156.jpg','158.jpg','159.jpg','160.jpg','164.jpg','171.jpg','172.jpg','175.jpg','176.jpg','178.jpg','179.jpg','184.jpg',
    '186.jpg','188.jpg','189.jpg','190.jpg','191.jpg','192.jpg','194.jpg','195.jpg','197.jpg','198.jpg','200.jpg','202.jpg',
    '205.jpg','206.jpg','211.jpg','212.jpg','215.jpg','216.jpg','218.jpg','242.jpg','289.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
