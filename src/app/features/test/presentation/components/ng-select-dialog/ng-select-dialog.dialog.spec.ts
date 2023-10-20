import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSelectDialogDialog } from './ng-select-dialog.dialog';

describe('NgSelectDialogDialog', () => {
  let component: NgSelectDialogDialog;
  let fixture: ComponentFixture<NgSelectDialogDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSelectDialogDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSelectDialogDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
