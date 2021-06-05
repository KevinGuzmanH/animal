import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';
import {gsap} from 'gsap/all';
@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.from('#heart',{
      scale: 0.90,
      duration: 2,
      yoyo: true,
      repeat: -1,
    })
  }

}
