import { Component } from '@angular/core';
import { Collapse } from '../../components/collapse/collapse';
import { CurrencyPipe, DatePipe, KeyValuePipe, UpperCasePipe, NgClass } from '@angular/common';
import { Consoler } from '../../directives/consoler';
import { Contrast } from "../../directives/contrast";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-index-page',
  imports: [Collapse, UpperCasePipe, CurrencyPipe, DatePipe,
    KeyValuePipe, NgClass, Consoler, Contrast, RouterLink],
  templateUrl: './index-page.html',
  styleUrl: './index-page.css',
})
export class IndexPage {
  now = Date.now();
}
