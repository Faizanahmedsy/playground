declare module "aframe-react" {
  import { ComponentType, HTMLAttributes } from "react";

  export const Scene: ComponentType<HTMLAttributes<HTMLElement>>;
  export const Entity: ComponentType<HTMLAttributes<HTMLElement>>;
}
