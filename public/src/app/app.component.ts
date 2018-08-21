import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  _blockCount: number;
  _blocksPerRow: number;
  _lastRow: number;
  _rowCount: number;
  _world: any[];
  _newParams: Object;

  constructor() {
  }

  ngOnInit() {
    this._blockCount = 11;
    this._blocksPerRow = 4;
    this._lastRow = this._blockCount % this._blocksPerRow;
    this._rowCount = Math.floor(this._blockCount / this._blocksPerRow);
    this._newParams = { blockCount: '11', blocksPerRow: '4' };

    this.init();
  }

  init() {
    this._world = [];
    for (let row = 0; row <= this._rowCount; row++) {
      const tempRow = [];
      if (row !== this._rowCount) {
        for (let col = 0; col < this._blocksPerRow; col++) {
          tempRow.push(1);
        }
      } else {
        for (let col = 0; col < this._lastRow; col++) {
          tempRow.push(1);
        }
      }

      if (tempRow.length !== 0) {
        this._world.push(tempRow);
      }
    }
  }

  toggle(x, y) {
    this._world[y][x] === 1 ? this._world[y][x] = 0 : this._world[y][x] = 1;
  }

  update() {
    this._blockCount = this._newParams['blockCount'];
    this._blocksPerRow = this._newParams['blocksPerRow'];
    this._lastRow = this._blockCount % this._blocksPerRow;
    this._rowCount = Math.floor(this._blockCount / this._blocksPerRow);
    this.init();
  }
}
