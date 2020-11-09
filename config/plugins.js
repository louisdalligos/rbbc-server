module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY")
    },
    settings: {
      defaultFrom: 'sales@rbbcrealty.com',
      defaultReplyTo: 'no-reply@rbbcrealty.com',
    },
  },
});
