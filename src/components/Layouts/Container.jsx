export default function Container({ children, width, maxWidth }) {
  return (
    <section className={`${width && "width"} ${maxWidth && "max-width"}`}>
      {children}
    </section>
  );
}
