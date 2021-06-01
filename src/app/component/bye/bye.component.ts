import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';
import { gsap, Power2, Elastic } from 'gsap/all';

@Component({
  selector: 'app-bye',
  templateUrl: './bye.component.html',
  styleUrls: ['./bye.component.css']
})
export class ByeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.set('#imgBye',{
      rotate: 10,
    });
    gsap.timeline().from('#imgBye',{
      rotate: -40,
      duration: 4,
      ease: 'back',
      yoyo: true,
      repeat: -1
    })
  }

}
