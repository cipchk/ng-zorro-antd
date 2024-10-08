import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-tree-customized-icon',
  template: `
    <nz-tree [nzData]="nodes" nzShowIcon></nz-tree>
    <nz-tree [nzData]="nodes" nzShowIcon [nzExpandedIcon]="multiExpandedIconTpl">
      <ng-template #multiExpandedIconTpl let-node let-origin="origin">
        @if (!origin.isLeaf) {
          <span
            nz-icon
            [nzType]="node.isExpanded ? 'folder-open' : 'folder'"
            class="ant-tree-switcher-line-icon"
          ></span>
        } @else {
          <span nz-icon nzType="file" class="ant-tree-switcher-line-icon"></span>
        }
      </ng-template>
    </nz-tree>
  `
})
export class NzDemoTreeCustomizedIconComponent {
  nodes = [
    {
      title: 'parent 1',
      key: '100',
      expanded: true,
      icon: 'smile',
      children: [
        { title: 'leaf', key: '1001', icon: 'meh', isLeaf: true },
        { title: 'leaf', key: '1002', icon: 'frown', isLeaf: true }
      ]
    }
  ];
}
