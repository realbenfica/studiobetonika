const maskClasses =
  "[mask-image:url(/images/dvor_logo.png)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:left_center] [-webkit-mask-image:url(/images/dvor_logo.png)] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:left_center]";

type DvorLogoProps = {
  className?: string;
  size?: "inline" | "large";
};

export function DvorLogo({ className = "", size = "inline" }: DvorLogoProps) {
  const sizeClass =
    size === "large"
      ? "h-10 w-[17.5rem] max-w-full sm:h-12 sm:w-[21rem]"
      : "h-[1em] w-[calc(1em*588/84)] max-w-none";

  return (
    <span
      role="img"
      aria-label="Dvor"
      className={`inline-block shrink-0 bg-white align-[-0.12em] aspect-[588/84] ${maskClasses} ${sizeClass} ${className}`}
    />
  );
}

export function DvorText({ text }: { text: string }) {
  const parts = text.split(/\b(Dvor)\b/);

  return (
    <>
      {parts.map((part, index) =>
        part === "Dvor" ? <DvorLogo key={index} /> : part,
      )}
    </>
  );
}
