interface SimpleImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function SimpleImage({ src, alt, className = '' }: SimpleImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        const parent = target.parentElement;
        if (parent) {
          parent.innerHTML = `<div class="w-full h-full bg-muted rounded-xl flex items-center justify-center text-muted-foreground text-xs">${alt}</div>`;
        }
      }}
    />
  );
}