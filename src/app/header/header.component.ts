import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() title: string;
  @Output() featureSelected = new EventEmitter<string>();

  onSelecct(feature: string) {
    this.featureSelected.emit(feature);
  }

}
