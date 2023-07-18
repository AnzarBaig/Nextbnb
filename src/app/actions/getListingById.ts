import prisma from "@/app/libs/prismadb";

interface IParams {
    listings?: string;
}

export default async function getListingById( params: IParams ) {
  try {
    const { listings } = params;

    const listing = await prisma.listing.findUnique({
      where: {
        id: listings,
      },
      include: {
        user: true
      }
    });

    if (!listing) {
      return null;
    }


/* Why we are spreading and converting Date obj into string...

In TypeScript, the Date type is not the same as the string type. The Date type represents a specific point in time, including the year, month, day, and time information. On the other hand, the string type is a data type that represents textual data.

The error occurs because the createdAt property in the first type is of type Date, but the expected type in the second type is string. TypeScript is strict about type safety, so it raises an error when there is a mismatch between types.

To resolve this issue and make the types match, we use the toISOString() method available on the Date object. This method converts the Date object into a string representation that includes the date and time in a standardized format. By converting the Date object to a string, we can ensure that the types match, and the error is resolved. */
    return {
      ...listing,
      createdAt: listing.createdAt.toString(),
      user: {
        ...listing.user,
        createdAt: listing.user.createdAt.toString(),
        updatedAt: listing.user.updatedAt.toString(),
        emailVerified: 
          listing.user.emailVerified?.toString() || null,
      }
    };


    }
    catch (error: any) {
    throw new Error(error);
  }
}