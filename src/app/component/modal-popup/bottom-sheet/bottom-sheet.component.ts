import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.less']
})
export class BottomSheetComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this._bottomSheet.open(SheetDialog);
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'sheet-dialog',
  templateUrl: 'sheet-dialog.html'
})
export class SheetDialog {
  constructor(private _bottomSheetRef: MatBottomSheetRef<SheetDialog>){}

  openLink(event: MouseEvent): void{
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
