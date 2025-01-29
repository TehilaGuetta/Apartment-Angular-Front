import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDir]'
})
export class DirDirective implements OnInit {
  @Input() mycolor: string=""
  constructor(public el: ElementRef) { }
  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.mycolor
  }
  @HostListener('mouseenter') K() {
    this.el.nativeElement.innerHTML =  "did you finish? click me"
  }
}
