module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        database: "rbbc_api",
        uri: env("MONGODB_CONNECTION"),
      },
      options: {
        ssl: true,
      },
    },
  },
});
