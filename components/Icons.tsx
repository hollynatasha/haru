type IconProps = {
  className?: string;
  size?: number;
};

export function InstagramIcon({ className, size = 22 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className, size = 22 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M14.5 3h2.7a5.2 5.2 0 0 0 3.8 3.8v2.7a8 8 0 0 1-3.8-1.1v6.4a5.8 5.8 0 1 1-5.8-5.8c.25 0 .5.02.74.06v2.78a3.06 3.06 0 1 0 2.36 2.98V3Z" />
    </svg>
  );
}

export function MailIcon({ className, size = 22 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </svg>
  );
}

export function WhatsAppIcon({ className, size = 22 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12.04 2.5a9.5 9.5 0 0 0-8.16 14.36L2.5 21.5l4.78-1.32A9.5 9.5 0 1 0 12.04 2.5Zm0 17.27a7.78 7.78 0 0 1-3.97-1.09l-.28-.17-2.83.78.76-2.76-.18-.29a7.77 7.77 0 1 1 6.5 3.53Zm4.27-5.83c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.52.12-.16.23-.6.76-.74.92-.13.16-.27.18-.5.06-.23-.12-.99-.36-1.88-1.15a7 7 0 0 1-1.3-1.62c-.13-.23-.01-.36.1-.48.1-.11.23-.27.34-.4.12-.13.16-.23.23-.39.08-.16.04-.3-.02-.42-.06-.12-.51-1.24-.7-1.7-.18-.45-.37-.39-.51-.4l-.44-.01a.84.84 0 0 0-.62.29c-.21.23-.82.81-.82 1.97 0 1.16.84 2.28.96 2.44.12.16 1.66 2.54 4.03 3.56.56.24 1 .38 1.34.49.56.18 1.07.16 1.47.1.45-.07 1.38-.56 1.58-1.11.2-.55.2-1.02.14-1.11-.06-.1-.21-.16-.45-.28Z" />
    </svg>
  );
}

export const ContactIcons = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  mail: MailIcon,
  whatsapp: WhatsAppIcon,
} as const;
