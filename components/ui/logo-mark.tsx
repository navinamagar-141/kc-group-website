import Image from "next/image";

export default function LogoMark({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="KC Group Logo"
      width={220}
      height={70}
      className={`object-contain ${className}`}
      priority
    />
  );
}