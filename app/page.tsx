import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4 md:px-20 lg:px-24">
      <section className="pb-5">
        <h1>Breinkrakers</h1>
        <p className="max-w-xl">
          Breinkrakers is een verzameling van verschillende spellen waar je je
          brein lekker op kunt kraken.
        </p>
      </section>
      <nav>
        <ul className="flex flex-col gap-4">
          <li>
            <Link className="link" href="/kraker/eerste">
              Eerste Breinkraker
            </Link>
          </li>
          <li>
            <Link className="link" href="/kraker/tweede">
              Tweede Breinkraker
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
