import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';
import { gsap, Power2, Elastic } from 'gsap/all';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  up(id: string){

    gsap.to(id, {
      duration: 3,
      delay: 0.4,
      y: -100,
      yoyo: true,
      ease: "slow",
      repeat: 1,
    });

  }

}
