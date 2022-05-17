import { z } from 'zod';

const configBoolean = z
  .enum(['true', 'false'])
  .transform((arg) => JSON.parse(arg));

export const configSchema = z.object({
  withMiddleware: configBoolean.default('true'),
});

export type Config = z.infer<typeof configSchema>;
