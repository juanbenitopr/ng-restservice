export class Filter {
  key: string;
  values: string[];

  constructor(key: string, ...values: string[]) {
    this.key = key;
    this.values = values;
  }
}
