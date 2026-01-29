import { buildApp } from "./app.js";
import { env, assertEnv } from "./config/env.js";

assertEnv();

const app = buildApp();
app.listen(env.PORT, () => {
  console.log(`StudentHub Api running on port ${env.PORT}`);
});
