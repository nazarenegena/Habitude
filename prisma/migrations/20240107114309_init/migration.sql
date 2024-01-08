-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "description" TEXT,
ADD COLUMN     "end_time" TEXT,
ADD COLUMN     "start_time" TEXT,
ALTER COLUMN "status" SET DEFAULT 'PENDING',
ALTER COLUMN "priority" SET DEFAULT 'LOW';
