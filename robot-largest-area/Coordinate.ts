export class Coordinate {

  public constructor(
    private _col: number,
    private _row: number
  ) {}

  public get col(): number {
    return this._col;
  }

  public get row(): number {
    return this._row;
  }
}
