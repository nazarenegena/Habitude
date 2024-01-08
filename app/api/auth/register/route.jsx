// accepting POST requests to this endpoint
import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { prisma } from '@/lib/prisma';
import { v4 as uuid } from 'uuid';

export const POST = async request => {
  const body = await request.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return new NextResponse('Missing Fields', { status: 400 });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email
    }
  });

  if (exist) {
    throw new Error('Email already exists');
  }

  const hashedPassword = await hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
      id: uuid()
    }
  });

  return NextResponse.json({ message: 'success', user });
};
