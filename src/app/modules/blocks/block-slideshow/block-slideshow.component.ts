import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DirectionService } from '../../../shared/services/direction.service';

@Component({
    selector: 'app-block-slideshow',
    templateUrl: './block-slideshow.component.html',
    styleUrls: ['./block-slideshow.component.scss']
})
export class BlockSlideshowComponent {
    @Input() withDepartments = false;

    options = {
        nav: false,
        dots: true,
        loop: true,
        responsive: {
            0: {items: 1}
        },
        rtl: this.direction.isRTL()
    };

    slides = [
        {
            title: '',
            text: '',
            image_classic: 'assets/images/slides/slide-1.jpg',
            image_full: 'assets/images/slides/BANNER1.png',
            image_mobile: 'assets/images/slides/slide-1-mobile.jpg'
        },
        {
            title: '',
            text: '',
            image_classic: 'assets/images/slides/slide-2.jpg',
            image_full: 'assets/images/slides/BANNER2.png',
            image_mobile: 'assets/images/slides/slide-2-mobile.jpg'
        },
        {
            title: '',
            text: '',
            image_classic: 'assets/images/slides/slide-3.jpg',
            image_full: 'assets/images/slides/BANNER3.png',
            image_mobile: 'assets/images/slides/slide-3-mobile.jpg'
        }
    ];

    constructor(
        public sanitizer: DomSanitizer,
        private direction: DirectionService
    ) { }
}
