import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-meta-test',
  templateUrl: './meta-test.component.html',
  styleUrls: ['./meta-test.component.css']
})
export class MetaTestComponent implements OnInit {
  constructor(private _metaService: Meta) {}

  ngOnInit(): void {
    this._metaService.updateTag({
      property: 'og:title',
      content: 'change'
    })
  }
}
