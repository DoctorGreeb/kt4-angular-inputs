import { computed, Directive, effect, ElementRef, HostBinding, inject } from '@angular/core';
import { UtilityService } from '../services/utility-service';

function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

@Directive({
  selector: '[appContrast]',
})
export class Contrast {
  constructor() {
    effect(() => {
      console.log('dasdaad')
      const rgb = hexToRgb(this.utilityService.bodyColor());
      this.textColor = `rgb(${255 - rgb!.r}, ${255 - rgb!.g}, ${255 - rgb!.b})`;
    });
  }

  private utilityService = inject(UtilityService);

  @HostBinding('style.color') textColor = 'black';
}
