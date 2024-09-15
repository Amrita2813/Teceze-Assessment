import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  currentIndex = 0;

  slideIndex = 1;
  testimonials = [
    { title: 'Gymstory.', author: 'Kornix is the Best Digital Agency I have Ever Seen! Highly Recommended',description:'Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit amet consectet' },
    { title: 'Pravir.', author: 'Kornix is the Best Digital Agency I have Ever Seen! Highly Recommended',description:'Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit amet consectet' },
    { title: 'Gitaaki.', author: 'Kornix is the Best Digital Agency I have Ever Seen! Highly Recommended',description:'Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit amet consectet Lorem ipsum dolor sit amet consectet' },
  ];

  changeSlide(direction: number) {
    this.currentIndex = (this.currentIndex + direction + this.testimonials.length) % this.testimonials.length;
  }

}
