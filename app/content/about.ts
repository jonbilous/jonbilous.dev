import ProfileImage from "~/assets/profile-image.jpg";

const years = new Date().getFullYear() - 2020;

export interface IAbout {
  description: string;
  img?: { src: string; alt: string };
}

export const about: IAbout = {
  img: { src: ProfileImage, alt: "Profile image" },
  description: `I'm a seasoned full stack engineer with ${years}+ years of diverse software development experience, primarily focused on developing progressive web applications using various frameworks with Typescript. I'm very enthusiastic about exploring & implementing new technologies that improve both customer & developer experience. Feel free to get in touch about your opportunity or app idea, or if you just need some advice on how to get started on your project!`,
};
