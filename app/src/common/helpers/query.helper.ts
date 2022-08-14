import { Equal, FindOptionsWhere, ILike, Raw } from 'typeorm';
import { QueryConfig } from '../interfaces/query-config.interface';

export function createFindOptionsWhere(
  config: QueryConfig,
  query: any,
): FindOptionsWhere<any> {
  const where: FindOptionsWhere<any> = {};

  Object.keys(query).forEach((column) => {
    if (query[column] === undefined) return;

    const tableColumn = config.mapColumn.get(column) || column;

    if ((config.equal || []).includes(column))
      where[tableColumn] = Equal(query[column]);
    if ((config.partial || []).includes(column))
      where[tableColumn] = ILike(`%${query[column]}%`);
    if ((config.jsonArrayContains || []).includes(column))
      where[tableColumn] = Raw(
        (alias) => `JSON_CONTAINS(${alias},'${query[column]}','$') = 1`,
      );
  });

  return where;
}
