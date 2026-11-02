This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Dvor trailer

The homepage uses a native video player in `app/components/trailer-player.tsx`,
with Studio Betonika colours, PP Alex typography, square controls and concrete
shadows. It shares Angelina's player behaviour: muted inline autoplay while
visible, pausing offscreen, pause/play, seek, restart and sound controls. Manual
pauses persist; reduced-motion visitors see the poster until they press Play.
Controls appear on hover, keyboard focus or touch, and remain visible when paused.

`public/videos/dvor-trailer.mp4` and `public/images/dvor-trailer.png` are copied
byte for byte from Angelina's full Dvor trailer and poster. The video is
1920×1080 at 24 fps, approximately 70.38 seconds, with the original AAC audio.
The full trailer is used; no media is edited or recompressed here.
