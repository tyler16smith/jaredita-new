import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { addFamily, getFamilies } from "@/server/services/families";
import { StudentSchema } from "@/utils/types";

export const studentsRouter = createTRPCRouter({
  getFamilies: publicProcedure
    .query(async () => {
      return await getFamilies();
    }),
  addFamily: publicProcedure
    .input(StudentSchema)
    .mutation(async ({ input }) => {
      return await addFamily(input);
    }),
});
