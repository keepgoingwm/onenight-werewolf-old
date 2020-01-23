import Role from './role'

export default class Player {

  constructor (roleName, position, game) {
    this.game = game
    this.role = new Role(roleName, game)
    // this.id = id
    this.position = position
    this.hasOperated = false
  }
}