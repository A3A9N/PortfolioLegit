export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  previewGif?: string;
  previewVideo?: string;
  showreel?: string;
  artGifs?: string[];
  codeGifs?: string[];
  gallery: string[];
  tech: string[];
  tags: string[];
  github: string;
  features: string[];
  contribution: string[];
  codeSnippets: { title: string; language: string; code: string }[];
}

import raw from './projects.json';

export const projects = raw as Project[];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);


