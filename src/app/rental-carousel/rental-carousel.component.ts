import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-rental-carousel',
  templateUrl: './rental-carousel.component.html',
  styleUrl: './rental-carousel.component.css'
})
export class RentalCarouselComponent implements OnInit{
  cards = [
    { imgSrc: '../../assets/img/carousel-img-1.png', name: 'New Apartment Nice View', tag: 'miami', address: 'Quincy St, Brooklyn, NY, USA  ', room: '02', bath: '03', sqft: '1,200SqFt', price: '25,000', buttonUrl: '' },
    { imgSrc: '../../assets/img/carousel-img-2.png', name: 'New Apartment Nice View', tag: 'miami', address: 'Quincy St, Brooklyn, NY, USA  ', room: '02', bath: '03', sqft: '1,200SqFt', price: '25,000', buttonUrl: '' },
    { imgSrc: '../../assets/img/carousel-img-3.png', name: 'New Apartment Nice View', tag: 'miami', address: 'Quincy St, Brooklyn, NY, USA  ', room: '02', bath: '03', sqft: '1,200SqFt', price: '25,000', buttonUrl: '' },
    { imgSrc: '../../assets/img/carousel-img-1.png', name: 'New Apartment Nice View', tag: 'miami', address: 'Quincy St, Brooklyn, NY, USA  ', room: '02', bath: '03', sqft: '1,200SqFt', price: '25,000', buttonUrl: '' },
    { imgSrc: '../../assets/img/carousel-img-2.png', name: 'New Apartment Nice View', tag: 'miami', address: 'Quincy St, Brooklyn, NY, USA  ', room: '02', bath: '03', sqft: '1,200SqFt', price: '25,000', buttonUrl: '' },
    { imgSrc: '../../assets/img/carousel-img-3.png', name: 'New Apartment Nice View', tag: 'miami', address: 'Quincy St, Brooklyn, NY, USA  ', room: '02', bath: '03', sqft: '1,200SqFt', price: '25,000', buttonUrl: '' },
    { imgSrc: '../../assets/img/carousel-img-1.png', name: 'New Apartment Nice View', tag: 'miami', address: 'Quincy St, Brooklyn, NY, USA  ', room: '02', bath: '03', sqft: '1,200SqFt', price: '25,000', buttonUrl: '' },
    { imgSrc: '../../assets/img/carousel-img-2.png', name: 'New Apartment Nice View', tag: 'miami', address: 'Quincy St, Brooklyn, NY, USA  ', room: '02', bath: '03', sqft: '1,200SqFt', price: '25,000', buttonUrl: '' },
    { imgSrc: '../../assets/img/carousel-img-3.png', name: 'New Apartment Nice View', tag: 'miami', address: 'Quincy St, Brooklyn, NY, USA  ', room: '02', bath: '03', sqft: '1,200SqFt', price: '25,000', buttonUrl: '' },
   

   // Add more card data as needed
  ];
  swiper!: Swiper;

  constructor() { }

  ngOnInit(): void {
    this.initSwiper();
  }

  initSwiper(): void {
    this.swiper = new Swiper(".swiper-container-rental", {
      slidesPerView: 1,
      // spaceBetween: 10,
      loop: true, // Set loop to true for infinite loop
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination-rental",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next-rental",
        prevEl: ".swiper-button-prev-rental",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        320: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 3,
        },
      },
    });
    this.swiper.slidesPerViewDynamic()
  }
  slideNext(){
    this.swiper.slideNext()
  }
  slidePrev(){
    this.swiper.slidePrev()
  }
}
