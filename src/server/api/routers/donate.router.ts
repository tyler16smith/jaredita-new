import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
// import { getDonationOpportunities } from "@/server/services/donate";
import { DonationSessionSchema } from "@/utils/types";
import { createDonationSession, getDonationSession } from "@/server/services/donate";
import { z } from "zod";
import { getIndividualDonationOpportunities } from "@/server/services/students";
import { getFamilyDonationOpportunities } from "@/server/services/families";

export const donateRouter = createTRPCRouter({
  getDonationOpportunities: publicProcedure
    .input(
      z.object({
        type: z.string(),
      })
    )
    .query(async ({ input }) => {
      if (input.type === 'individual') {
        return await getIndividualDonationOpportunities()
      }
      if (input.type === 'family') {
        return await getFamilyDonationOpportunities()
      }
      return []
    }),
  createDonationSession: publicProcedure
    .input(DonationSessionSchema)
    .mutation(async ({ input }) => {
      return await createDonationSession(input.donationSession);
    }),
  getDonationSession: publicProcedure
    .input(
      z.object({
        id: z.string()
      })
    )
    .query(async ({ input }) => {
      return await getDonationSession(input.id, true);
    }),
});
