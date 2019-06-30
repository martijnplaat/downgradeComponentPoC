import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'custom-label',
    templateUrl: './customLabel.html'
})
export class CustomLabelComponent {
    @Input() label: string;
    @Output() updateLabel = new EventEmitter<string>();

    constructor(){
    }

    onBlur() {
        debugger;
        this.updateLabel.emit(this.label);
    }

}