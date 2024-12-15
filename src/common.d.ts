type IconSvg = React.FC<React.SVGAttributes<SVGElement>>;

declare module '*.svg' {
  const content: IconSvg;
  export default content;
}
