type Props = {
  id: string;
  children: React.ReactNode;
};

export default function Section({ id, children }: Props) {
  return (
    <section id={id} className="border-t border-ink px-6 py-12 md:px-16 md:py-18">
      {children}
    </section>
  );
}
