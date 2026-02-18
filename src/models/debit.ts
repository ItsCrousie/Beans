class Credit implements Transaction {
  constructor(
    public id: string,
    public amount: number
  ) {}

  /**
   * Prints credit in output printable format.
   */
}
