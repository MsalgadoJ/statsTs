import fs from "fs";
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
  constructor(public fileName: string) {}

  print(report: string): void {
    const html = `
    <di>
        <h1> Analysis Output</h1>
        <div>${report}</div>
    </di>
    `;

    fs.writeFileSync(this.fileName, html);
  }
}
