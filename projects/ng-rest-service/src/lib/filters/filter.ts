export class Filter {
  key: string;
  values: string[];

  constructor(key: string, ...value: string[]) {
    this.key = key;
    this.values = value;
  }
}
