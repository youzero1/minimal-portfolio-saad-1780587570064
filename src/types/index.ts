export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type NavLink = {
  label: string;
  href: string;
};
