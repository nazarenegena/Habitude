'use server';
import { handler } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export async function getUser() {
  const { user: userData } = await getServerSession(handler);
  const user = await prisma.user.findUnique({
    where: {
      email: userData.email
    }
  });

  if (!user) throw new Error('User not Found please log in to continue');

  return user;
}

export async function CreatePlan(data) {
  const user = await getUser();

  const plan = await prisma.plan.create({
    data: {
      userId: user.id,
      ...data
    }
  });

  if (!plan) throw new Error('Something went wrong');

  return { message: 'success', plan };
}

export async function GetPlans() {
  const user = await getUser();

  const plans = await prisma.plan.findMany({
    where: {
      userId: user.id
    },
    include: { tasks: true },
    orderBy: {
      createdAt: 'desc'
    }
  });
  if (!plans) return [];

  return plans;
}
