import * as Create from './Create'
import * as GetByEmail from './GetByEmail'


export const UsuarioProvider = {
  ...Create,
  ...GetByEmail
}