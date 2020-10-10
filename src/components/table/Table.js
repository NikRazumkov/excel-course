import {ExcelComponent} from "@core/ExelComponent";

export class Table extends ExcelComponent {
  static className = 'excel__table';
  toHTML() {
    return `
      <div class="row">
        <div class="row-info"></div>
        <div class="row-data">
          <div class="column">A</div>
          <div class="column">B</div>
          <div class="column">C</div>
        </div>
      </div>
      <div class="row">
        <div class="row-info">1</div>
        <div class="row-data">
          <div class="cell selected" contenteditable="true" spellcheck="false">A1</div>
          <div class="cell" contenteditable="true" spellcheck="false">B1</div>
          <div class="cell" contenteditable="true" spellcheck="false">C1</div>
        </div>
      </div>
      <div class="row">
        <div class="row-info">2</div>
        <div class="row-data">
          <div class="cell" contenteditable="true" spellcheck="false">A2</div>
          <div class="cell" contenteditable="true" spellcheck="false">B2</div>
          <div class="cell" contenteditable="true" spellcheck="false">C2</div>
        </div>
      </div>
    `;
  }
}