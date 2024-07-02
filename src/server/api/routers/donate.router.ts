import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
// import { getDonationOpportunities } from "@/server/services/donate";
import { fakeFamilyData, fakeStudentData } from "@/utils/data";

export const donateRouter = createTRPCRouter({
  getDonationOpportunities: publicProcedure
    .input(
      z.object({
        type: z.string(),
      })
    )
    .query(async ({ input }) => {
      if (input.type === 'individual') return fakeStudentData
      if (input.type === 'family') return fakeFamilyData
      return []
      // return await getDonationOpportunities(input.type);
    }),
});
