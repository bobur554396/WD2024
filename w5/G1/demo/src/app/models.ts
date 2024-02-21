export class Task {
  static currentID: number = 1;
  id: number;
  name: string;
  isDone: boolean;

  constructor(name: string) {
    this.id = 1;
    this.name = name;
    this.isDone = false;
  }
}
