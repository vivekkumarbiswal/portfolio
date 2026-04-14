import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;
  @Input() revealClass = 'revealed';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(28px)');
    this.renderer.setStyle(this.el.nativeElement, 'transition',
      `opacity 0.65s cubic-bezier(0.4,0,0.2,1) ${this.revealDelay}ms, transform 0.65s cubic-bezier(0.4,0,0.2,1) ${this.revealDelay}ms`);

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
          this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
          this.observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
