/*
  Warnings:

  - The primary key for the `hunts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `hunts` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `users` table. All the data in the column will be lost.
  - Added the required column `hunt_id` to the `hunts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hunts" DROP CONSTRAINT "hunts_pkey",
DROP COLUMN "id",
ADD COLUMN     "hunt_id" UUID NOT NULL,
ADD CONSTRAINT "hunts_pkey" PRIMARY KEY ("hunt_id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "id",
ADD COLUMN     "user_id" SERIAL NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("user_id");

-- CreateTable
CREATE TABLE "pokemon" (
    "pokemon_id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "shiny_img" TEXT,
    "normal_img" TEXT,

    CONSTRAINT "pokemon_pkey" PRIMARY KEY ("pokemon_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pokemon_name_key" ON "pokemon"("name");
