import { Component, inject } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule, NzImagePreviewOptions, NzImageService } from 'ng-zorro-antd/image';

@Component({
  selector: 'nz-demo-image-service',
  standalone: true,
  imports: [NzButtonModule, NzImageModule],
  template: `
    <button nz-button nzType="primary" (click)="onClick()">Preview</button>
    <button nz-button nzType="primary" (click)="onClick({ nzIndex: 1 })">Start 1 index</button>
  `
})
export class NzDemoImageServiceComponent {
  private nzImageService = inject(NzImageService);
  readonly images = [
    {
      src: 'https://img.alicdn.com/tfs/TB1g.mWZAL0gK0jSZFtXXXQCXXa-200-200.svg',
      width: '200px',
      height: '200px',
      alt: 'ng-zorro'
    },
    {
      src: 'https://img.alicdn.com/tfs/TB1Z0PywTtYBeNjy1XdXXXXyVXa-186-200.svg',
      width: '200px',
      height: '200px',
      alt: 'angular'
    }
  ];

  onClick(options?: NzImagePreviewOptions): void {
    this.nzImageService.preview(this.images, { nzZoom: 1.5, nzRotate: 0, ...options });
  }
}
