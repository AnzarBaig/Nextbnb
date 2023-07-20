
# [NextBNB](https://nextbnb-v2.vercel.app)

A Full Stack NextBNB, offering exceptional performance and a seamless user experience through Server Side Rendering (SSR). A optimized design that ensures ease of navigation and lightning-fast loading times while maintainer state using Zustand. Leveraging the power of SSR with Next.js 13, delivering a smooth and efficient user experience.

![nextbnb](https://github.com/AnzarBaig/Nextbnb/assets/86596090/500606f6-454c-4f41-81d9-7b492523ad9d)



## Tech Stack

- Next.js 13
- Zustand
- MongoDB
- Tailwind
- Cloudinary CDN
- Leaflet map
## Features

- Server Side Rendering with Next.js 13 for improved performance
- Sleek and modern design with animations and effects using Tailwind CSS
- Protected routes using middleware
- Credential, Google, and GitHub authentication for a seamless login process usning Next-auth
- Image uploads with Cloudinary CDN
- Server error handling with React Toast and calendar functionality with React Date Range
- Booking reservation system with guest and owner reservation cancellation
- Advanced search algorithm based on category, date range, map location, guests, rooms, and bathrooms
- Creation and deletion of properties with advanced pricing calculation
- Favorite system and shareable URL filters for easy sharing of search results

## Run Locally

Clone the project

```bash
  git clone https://github.com/AnzarBaig/Nextbnb.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```
Setup Prisma
```bash
 npx prisma db push
```

Start the server(after you have added .env file)

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXTAUTH_URL =`

`DATABASE_URL =`

`NEXTAUTH_SECRET =`

`GITHUB_ID =`

`GITHUB_SECRET =`

`GOOGLE_CLIENT_ID =`

`GOOGLE_CLIENT_SECRET =`

`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME =`
