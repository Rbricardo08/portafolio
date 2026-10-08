export type SocialIcon = "instagram" | "youtube" | "linkedin" | "x" | "tiktok";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
  primary?: boolean;
};

export const profile = {
  name: "Ricardo BonillaM",
  phrase: "Serving and Learning",
  photo: "/foto-portafolio.jpg",
  photoAlt: "Retrato de Ricardo BonillaM",
  links: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/ricardobonillai",
      icon: "instagram",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@ricardobonillaia",
      icon: "youtube",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ricardo-bonilla-321991386",
      icon: "linkedin",
    },
    {
      label: "X",
      href: "https://x.com/ricardobonillai",
      icon: "x",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@ricardobonillam",
      icon: "tiktok",
    },
  ] satisfies SocialLink[],
};
