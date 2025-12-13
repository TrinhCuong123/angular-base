import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DxContextMenuModule } from 'devextreme-angular';

@Component({
  selector: 'ms-context-menu',
  standalone: true,
  templateUrl: './MsContextMenu.component.html',
  styleUrls: ['./MsContextMenu.component.scss'],
  imports: [CommonModule, DxContextMenuModule],
})
export class MsContextMenuComponent {

  @Input() value: number = 0;          // label input
  @Output() valueChange = new EventEmitter<number>(); // emit value
  @Input() dataSource: any[] = [];     // data source
  selectedItemId: any;

  onSelectItem(e: any) {
    const newValue = e.itemData.id;
    this.value = newValue;
    this.valueChange.emit(newValue);
  }
}
