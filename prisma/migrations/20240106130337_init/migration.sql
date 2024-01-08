-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('COMPLETED', 'PENDING', 'INPROGRESS');

-- CreateEnum
CREATE TYPE "PRIORITY" AS ENUM ('HIGH', 'LOW', 'MEDIUM');

-- CreateTable
CREATE TABLE "Plan" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "status" "STATUS" NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "status" "STATUS" NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "priority" "PRIORITY" NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
