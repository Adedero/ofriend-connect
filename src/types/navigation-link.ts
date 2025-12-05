export default interface NavigationLink {
  label: string;
  href?: string;
  children?: Array<NavigationLink & { description?: string }>;
}
