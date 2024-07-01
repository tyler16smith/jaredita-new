import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getDonationOpportunities } from "@/server/services/donate";

export const donateRouter = createTRPCRouter({
  getDonationOpportunities: publicProcedure
    .input(
      z.object({
        type: z.string(),
      })
    )
    .query(async ({ input }) => {
      return [
        {
          id: '1',
          age: 10,
          cost: 15.00,
          city: 'Bogor',
          country: 'Indonesia',
        },
        {
          id: '2',
          age: 14,
          cost: 15.00,
          city: 'Tangerang',
          country: 'Indonesia',
        },
        {
          id: '3',
          age: 12,
          cost: 15.00,
          city: 'Medan',
          country: 'Indonesia',
        },
        {
          id: '4',
          age: 12,
          cost: 15.00,
          city: 'Medan',
          country: 'Indonesia',
        },
        {
          id: '5',
          age: 12,
          cost: 15.00,
          city: 'Medan',
          country: 'Indonesia',
        },
      ]
      // return await getDonationOpportunities(input.type);
    }),
});
