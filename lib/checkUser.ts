import { currentUser } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

export const checkUser = async () => {
  const user = await currentUser();
  console.log(user);

  try {
    // check if user is logged in
    if (!user) {
      return null;
    }

    // check if user exists in the database
    const existingUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (!existingUser) {
      return null;
    }

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl,
      },
    });

    return newUser;
  } catch (error) {
    console.error(error);
  }
};
