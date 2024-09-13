import { CommonModule } from "@angular/common";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent implements OnInit {

 slideIndex = 1;
  testimonials = [
    { text: 'This is the first testimonial.', author: 'John Doe' },
  ];

  ngOnInit(): void {
      this.showSlides(this.slideIndex)
  }

 showSlides(index:number) {
  let i;
  // let slides = document.getElementsByClassName("mySlides");
  // console.log('slides',slides);
  // if (index > slides.length) {this.slideIndex = 1}
  // if (index < 1) {this.slideIndex = slides.length}
  // for (i = 0; i < slides.length; i++) {
  //   slides[i].style.display = "none";
  // }
  // slides[this.slideIndex-1].style.display = "block";
}

plusSlides(index:number) {
  this.showSlides(this.slideIndex += index);
}

currentSlide(index:number) {
  this.showSlides(this.slideIndex = index);
}

}
