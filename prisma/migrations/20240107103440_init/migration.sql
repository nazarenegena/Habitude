/*
  Warnings:

  - Added the required column `color` to the `Plan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plan" ADD COLUMN     "color" TEXT NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;
