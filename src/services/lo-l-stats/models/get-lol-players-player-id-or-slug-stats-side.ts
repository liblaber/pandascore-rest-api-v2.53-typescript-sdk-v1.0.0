// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const getLolPlayersPlayerIdOrSlugStatsSide = z.enum(['blue', 'red']);

export type GetLolPlayersPlayerIdOrSlugStatsSide = z.infer<typeof getLolPlayersPlayerIdOrSlugStatsSide>;
