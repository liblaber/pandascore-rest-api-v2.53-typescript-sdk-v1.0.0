import { z } from 'zod';
import { streamLanguage } from './stream-language';

/**
 * The shape of the model inside the application code - what the users use
 */
export const stream = z.object({
  embedUrl: z.string(),
  language: streamLanguage,
  main: z.boolean(),
  official: z.boolean(),
  rawUrl: z.string(),
});

/**
 *
 * @typedef  {Stream} stream
 * @property {string} - URL to embed in an iframe.
 * @property {StreamLanguage} - Language alpha-2 code according to ISO 649-1 standard.
 * @property {boolean} - Whether it is the main stream. Main stream is always official.
 * @property {boolean} - Whether it is an official broadcast.
 * @property {string} - URL to the stream on host website.
 */
export type Stream = z.infer<typeof stream>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const streamResponse = z
  .object({
    embed_url: z.string(),
    language: streamLanguage,
    main: z.boolean(),
    official: z.boolean(),
    raw_url: z.string(),
  })
  .transform((data) => ({
    embedUrl: data['embed_url'],
    language: data['language'],
    main: data['main'],
    official: data['official'],
    rawUrl: data['raw_url'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const streamRequest = z
  .object({
    embedUrl: z.string().nullish(),
    language: streamLanguage.nullish(),
    main: z.boolean().nullish(),
    official: z.boolean().nullish(),
    rawUrl: z.string().nullish(),
  })
  .transform((data) => ({
    embed_url: data['embedUrl'],
    language: data['language'],
    main: data['main'],
    official: data['official'],
    raw_url: data['rawUrl'],
  }));
