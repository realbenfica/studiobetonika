import Link from "next/link";

export function PageIcon() {
  return (
    <Link href="/" className="mb-8 inline-block transition-opacity hover:opacity-80">
      <img
        src="/images/icon.png"
        alt="Studio Betonika"
        className="block h-auto w-[clamp(2.5rem,10.5vw,4rem)] object-contain object-left"
      />
    </Link>
  );
}
