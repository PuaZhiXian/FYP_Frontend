import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import hljs from "highlight.js";

@Component({
  selector: 'highlightjs',
  templateUrl: './highlightjs.component.html',
  styleUrls: ['./highlightjs.component.scss']
})
export class HighlightjsComponent implements OnInit, AfterViewInit {

  @Input() code!: string;
  @Input() extraClass?: string = ''
  htmlTemplate: string = '';

  ngOnInit(): void {
    this.htmlTemplate = '<pre class="light mb-0"><code class="language-json max-h-[400px] text-xs">' + this.code + '</code></pre>';
  }

  ngAfterViewInit(): void {
    hljs.highlightAll();
  }

}
