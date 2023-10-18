type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const LazyImage = ({ src, alt, className }: LazyImageProps) => (
  <img src={src} alt={alt} className={className} />
);

export default LazyImage;
