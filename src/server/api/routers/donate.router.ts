import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getDonationOpportunities } from "@/server/services/donate";

export const donateRouter = createTRPCRouter({
  getDonationOpportunities: publicProcedure
    .query(async () => {
      return await getDonationOpportunities();
    }),
});