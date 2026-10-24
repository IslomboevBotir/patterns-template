import { isMain } from "../utils/is-main.ts";

export class DatabaseHelper {
  private static instance: DatabaseHelper | undefined;
  private data = "";

  private constructor() {
    console.log("Подключение к БД");
  }

  static getInstance(): DatabaseHelper {
    DatabaseHelper.instance ??= new DatabaseHelper();
    return DatabaseHelper.instance;
  }

  selectData(): string {
    return this.data;
  }

  insertData(newData: string): void {
    this.data = newData;
  }
}

if (isMain(import.meta.url)) {
  const connection1 = DatabaseHelper.getInstance();
  connection1.insertData("ewq");
  console.log(connection1.selectData());
  const connection2 = DatabaseHelper.getInstance();
  console.log(connection2.selectData());
  console.log("same instance:", connection1 === connection2);
}
