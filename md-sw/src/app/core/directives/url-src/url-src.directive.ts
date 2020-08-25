import { Directive, Input, OnChanges, SimpleChanges, HostBinding } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'img[urlSrc], div[urlSrc], [urlSrc]'
})
export class UrlSrcDirective implements OnChanges {
  @Input() url: any;
  @Input() bypass: boolean;
  @HostBinding('style.backgroundImage')
  backgroundImage: SafeResourceUrl;
  constructor(
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.backgroundImage = this.getImageDomain(this.url);
  }

  /**
   * get the image src and replace the src with server src
   * @param src Image to set as image src
   */
  private getImageDomain(url: string): SafeResourceUrl {
    let domain: SafeResourceUrl;
    if (url) {
      if (this.bypass || (url && (url.indexOf('data:image') !== -1))) {
        domain = `url(${url})`;
      } else {
        domain = this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
      }
    }
    return domain;
  }
}
