const USERNAME = "studiobetonika";

const SOCIALS = [
  {
    name: "TikTok",
    href: `https://www.tiktok.com/@${USERNAME}`,
    label: `TikTok (@${USERNAME})`,
    path: "M12.525 0.02c1.31 -0.02 2.61 -0.01 3.91 -0.02 0.08 1.53 0.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44 -0.05 -2.89 -0.35 -4.2 -0.97 -0.57 -0.26 -1.1 -0.59 -1.62 -0.93 -0.01 2.92 0.01 5.84 -0.02 8.75 -0.08 1.4 -0.54 2.79 -1.35 3.94 -1.31 1.92 -3.58 3.17 -5.91 3.21 -1.43 0.08 -2.86 -0.31 -4.08 -1.03 -2.02 -1.19 -3.44 -3.37 -3.65 -5.71 -0.02 -0.5 -0.03 -1 -0.01 -1.49 0.18 -1.9 1.12 -3.72 2.58 -4.96 1.66 -1.44 3.98 -2.13 6.15 -1.72 0.02 1.48 -0.04 2.96 -0.04 4.44 -0.99 -0.32 -2.15 -0.23 -3.02 0.37 -0.63 0.41 -1.11 1.04 -1.36 1.75 -0.21 0.51 -0.15 1.07 -0.14 1.61 0.24 1.64 1.82 3.02 3.5 2.87 1.12 -0.01 2.19 -0.66 2.77 -1.61 0.19 -0.33 0.4 -0.67 0.41 -1.06 0.1 -1.79 0.06 -3.57 0.07 -5.36 0.01 -4.03 -0.01 -8.05 0.02 -12.07z",
  },
  {
    name: "Bluesky",
    href: `https://bsky.app/profile/${USERNAME}.bsky.social`,
    label: `Bluesky (@${USERNAME}.bsky.social)`,
    path: "M12 10.8c-1.087 -2.114 -4.046 -6.053 -6.798 -7.995C2.566 0.944 1.561 1.266 0.902 1.565 0.139 1.908 0 3.08 0 3.768c0 0.69 0.378 5.65 0.624 6.479 0.815 2.736 3.713 3.66 6.383 3.364 0.136 -0.02 0.275 -0.039 0.415 -0.056 -0.138 0.022 -0.276 0.04 -0.415 0.056 -3.912 0.58 -7.387 2.005 -2.83 7.078 5.013 5.19 6.87 -1.113 7.823 -4.308 0.953 3.195 2.05 9.271 7.733 4.308 4.267 -4.308 1.172 -6.498 -2.74 -7.078a8.741 8.741 0 0 1 -0.415 -0.056c0.14 0.017 0.279 0.036 0.415 0.056 2.67 0.297 5.568 -0.628 6.383 -3.364 0.246 -0.828 0.624 -5.79 0.624 -6.478 0 -0.69 -0.139 -1.861 -0.902 -2.206 -0.659 -0.298 -1.664 -0.62 -4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@StudioBetonika",
    label: "YouTube (@StudioBetonika)",
    path: "M23.498 6.186a3.016 3.016 0 0 0 -2.122 -2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0 -9.377 0.505A3.017 3.017 0 0 0 0.502 6.186C0 8.07 0 12 0 12s0 3.93 0.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871 0.505 9.376 0.505 9.376 0.505s7.505 0 9.377 -0.505a3.015 3.015 0 0 0 2.122 -2.136C24 15.93 24 12 24 12s0 -3.93 -0.502 -5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    name: "Instagram",
    href: `https://www.instagram.com/${USERNAME}`,
    label: `Instagram (@${USERNAME})`,
    path: "M8.5 2h7A6.5 6.5 0 0 1 22 8.5v7A6.5 6.5 0 0 1 15.5 22h-7A6.5 6.5 0 0 1 2 15.5v-7A6.5 6.5 0 0 1 8.5 2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.25.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    fillRule: "evenodd" as const,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61593221154706",
    label: "Facebook (Studio Betonika)",
    path: "M24 12.073c0 -6.627 -5.373 -12 -12 -12s-12 5.373 -12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0 -3.007 1.792 -4.669 4.533 -4.669 1.312 0 2.686 0.235 2.686 0.235v2.953H15.83c-1.491 0 -1.956 0.925 -1.956 1.874v2.25h3.328l-0.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "X",
    href: `https://x.com/${USERNAME}`,
    label: `X (@${USERNAME})`,
    path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8 -7.584 -6.638 7.584H0.474l8.6 -9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  },
] as const;

function SocialIcon({
  path,
  fillRule,
}: {
  path: string;
  fillRule?: "evenodd" | "nonzero";
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="size-6 shrink-0 fill-current"
      aria-hidden
    >
      <path d={path} fillRule={fillRule} clipRule={fillRule} />
    </svg>
  );
}

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <nav
      className={`flex max-w-full flex-wrap items-center gap-x-6 gap-y-4 ${className}`}
      aria-label="Social media"
    >
      {SOCIALS.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 transition-colors hover:text-logo-accent"
          aria-label={social.label}
        >
          <SocialIcon
            path={social.path}
            fillRule={"fillRule" in social ? social.fillRule : undefined}
          />
        </a>
      ))}
    </nav>
  );
}
