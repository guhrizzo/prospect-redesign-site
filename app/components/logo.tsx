export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="https://highpointroofingcorp.com/wp-content/themes/highpointroofing-new/images/new-logo.png"
      alt="High Point Roofing Corp"
      className={`object-contain ${className}`}
    />
  );
}
