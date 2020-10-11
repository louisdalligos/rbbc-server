module.exports = ({ env }) => ({
  email: {
    provider: "mailgun",
    providerOptions: {
      apiKey: env("MAILGUN_API_KEY"),
      domain: env("MAILGUN_DOMAIN"), //Required if you have an account with multiple domains
    },
    settings: {
      defaultFrom: "zindex14@gmail.com",
      defaultReplyTo: "zindex14@gmail.com",
    },
  },
});
