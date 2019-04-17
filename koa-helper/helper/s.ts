import { BaseContext } from 'koa'

export function s(ctx: BaseContext, data = undefined, status_code = 200, success = true) {
  ctx.status = status_code
  ctx.body = {
    data,
    success,
  }
}
