import { SpreadsheetRow } from '../../entities/spreadsheet-row';
import { UseCase } from '../../base/use-case';
import { formatRow } from '@getlab/util-core';

export class ParseSpreadsheetUseCase
  implements UseCase<SpreadsheetRow[], string>
{
  execute(rows: SpreadsheetRow[]) {
    const parsed = rows.map(formatRow).join('\n');

    return Promise.resolve(parsed);
  }
}
