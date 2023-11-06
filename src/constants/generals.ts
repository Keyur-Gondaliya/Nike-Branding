export interface NavLink {
  href: string;
  label: string;
}

export interface Shoe {
  thumbnail: string;
  bigShoe: string;
}

export interface Statistic {
  value: string;
  label: string;
}

export interface Product {
  imgURL: string;
  name: string;
  price: string;
}

export interface Service {
  imgURL: string;
  label: string;
  subtext: string;
}

export interface Review {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

interface FooterLink {
  name: string;
  link: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialMedia {
  src: string;
  alt: string;
}
