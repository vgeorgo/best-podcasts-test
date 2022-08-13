export interface QueryConfig {
  /**
   * Maps search column to table columns.
   * IE.: Search field called 'name' has the name 'username' in the database.
   * This provides a way to organize external query parameters and still have search control over the result query.
   */
  mapColumn?: Map<string, string>;
  /**
   * Fields strictly compared.
   */
  equal?: Array<string>;
  /**
   * Fields partially compared (case insensitive).
   */
  partial?: Array<string>;
  /**
   * Fields inside a JSON array column
   */
  jsonArrayContains?: Array<string>;
}
