import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private _showDialog: boolean = false;
  private _id: string = "";
  private _name: string = "";

  constructor() { }

  public get showDialog() {
    return this._showDialog;
  }

  public set showDialog(value: boolean) {
    this._showDialog = value;
  }

  public get id() {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get name() {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }
}
