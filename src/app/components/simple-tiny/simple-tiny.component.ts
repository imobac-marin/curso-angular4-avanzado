import { Component, OnDestroy, AfterViewInit, EventEmitter, Input, Output } from '@angular/core';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'simple-tiny',
  template: `<textarea id="{{elementId}}"></textarea>`
})
export class SimpleTinyComponent implements AfterViewInit, OnDestroy {

  @Input() elementId: string;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEditorKeyUp = new EventEmitter<any>();

  editor;

  constructor() { }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyUp.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
