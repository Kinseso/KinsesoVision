export default {
  migrations: {
    seed: 'tsx ./prisma/seed.ts',
  },
  datasource: {
    url: "file:./dev.db",
  },
};