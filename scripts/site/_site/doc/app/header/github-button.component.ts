import { Platform } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-github-btn',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="gh-btn" tabindex="-1" [href]="'https://github.com/' + repo" target="_blank" rel="noopener" aria-hidden="true">
      <span class="gh-ico" aria-hidden="true"></span>
      <span class="gh-text">Star</span>
    </a>
    <a
      class="gh-count"
      target="_blank"
      rel="noopener"
      [href]="'https://github.com/' + repo + '/stargazers'"
      style="display: block;"
    >
      {{ starCount }}
    </a>
  `,
  host: {
    id: 'github-btn',
    class: 'github-btn',
    '[class.responsive-mode]': 'responsive',
    '[class.responsive-narrow]': 'responsive === "narrow"',
    '[class.responsive-crowded]': 'responsive === "crowded"'
  },
  encapsulation: ViewEncapsulation.None
})
export class GithubButtonComponent implements OnInit {
  starCount = 0;
  repo = 'NG-ZORRO/ng-zorro-antd';
  @Input() responsive: null | 'narrow' | 'crowded' = null;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef, private platform: Platform) {}

  ngOnInit(): void {
    if (this.platform.isBrowser) {
      this.getStar();
    }
  }

  private getStar(): void {
    this.http
      .get<{ stargazers_count: number }>(`https://api.github.com/repos/${this.repo}`)
      .subscribe((res: { stargazers_count: number }) => {
        this.starCount = res.stargazers_count;
        this.cdr.markForCheck();
      });
  }
}
