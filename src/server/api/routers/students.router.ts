import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { addStudent, getStudents, updateStudent } from "@/server/services/students";
import { StudentSchema, UpdateStudentSchema } from "@/utils/types";

export const studentsRouter = createTRPCRouter({
  getStudents: publicProcedure
    .query(async () => {
      return await getStudents();
    }),
  addStudent: publicProcedure
    .input(StudentSchema)
    .mutation(async ({ input }) => {
      return await addStudent(input);
    }),
  updateStudent: publicProcedure
    .input(UpdateStudentSchema)
    .mutation(async ({ input }) => {
      return await updateStudent(input);
    }),
});
