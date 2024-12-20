import Image from "next/image";

export function SVGIcon({
  name,
  className,
  width = 24,
  height = 24,
}: {
  name: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <Image
      src={`/img/${name}.svg`}
      width={width}
      height={height}
      className={className}
      alt={`${name} icon`}
    />
  );
}
