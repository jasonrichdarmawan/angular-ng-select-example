import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgSelectDialogDialog } from '../../components/ng-select-dialog/ng-select-dialog.dialog';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openNgSelectDialog() {
    this.dialog.open(NgSelectDialogDialog, {
      
    });
  }
}
