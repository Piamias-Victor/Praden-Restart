export class WrongUserError extends Error {
  constructor() {
    super('Identifiant incorrect');
  }
}
