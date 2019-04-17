import { BaseContext } from 'koa'
import { Code } from './e.type'

export function e(ctx: BaseContext, code: Code = 'INVALID_PARAMETER', description: string = undefined, status_code: number = 403, example = undefined, success = false) {
  ctx.status = status_code
  ctx.body = {
    code,
    description,
    success,
    example,
  }
}
