'use strict';

/**
 * A set of functions called "actions" for `users`
 */

module.exports = {
  updateUserRole: async ctx => {
    return await strapi.services.auth.updateUserRole (ctx.request.body.user,
      ctx.request.body.roleType);

  }
};
