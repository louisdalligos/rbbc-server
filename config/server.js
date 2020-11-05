const forgotPasswordTemplate = require("./email-templates/forgot-password");

module.exports = ({ env }) => ({
  host: env("APP_HOST", "0.0.0.0"),
  port: env.int("NODE_PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
    forgotPassword: {
      from: "zindex14@gmail.com",
      replyTo: "zindex14@gmail.com",
      emailTemplate: forgotPasswordTemplate,
    },
  },
});
