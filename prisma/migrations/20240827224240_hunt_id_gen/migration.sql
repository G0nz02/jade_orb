/*
  Warnings:

  - The primary key for the `hunts` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "hunts" DROP CONSTRAINT "hunts_pkey",
ALTER COLUMN "hunt_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "hunts_pkey" PRIMARY KEY ("hunt_id");
