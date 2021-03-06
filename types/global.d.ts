/** Global definitions for developement **/

// for style loader
declare module '*.scss' {
  const styles: any;
  export = styles;
}

declare module '*.svg' {
  const value: React.FC<React.SVGAttributes<SVGElement>>;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}