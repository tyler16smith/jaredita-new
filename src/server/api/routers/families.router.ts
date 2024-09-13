import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { addFamily, getFamilies, updateFamily } from "@/server/services/families";
import { FamilySchema, FullFamilySchema } from "@/utils/types";

export const familiesRouter = createTRPCRouter({
  getFamilies: publicProcedure
    .query(async () => {
      return await getFamilies();
    }),
  addFamily: publicProcedure
    .input(FamilySchema)
    .mutation(async ({ input }) => {
      return await addFamily(input);
    }),
  updateFamily: publicProcedure
    .input(FullFamilySchema)
    .mutation(async ({ input }) => {
      return await updateFamily(input);
    }),
});
