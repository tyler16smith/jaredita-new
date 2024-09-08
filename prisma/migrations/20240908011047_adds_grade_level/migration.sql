/*
  Warnings:

  - The `grade_level` column on the `students` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "GradeLevel" AS ENUM ('preK', 'kindergarten', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'technicalSchool', 'undergraduate', 'masters', 'phd');

-- AlterTable
ALTER TABLE "students" DROP COLUMN "grade_level",
ADD COLUMN     "grade_level" "GradeLevel";
