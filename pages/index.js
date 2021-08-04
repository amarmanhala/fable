import Head from "next/head";
import { Navbar } from "../components/designsystem/Navbar";
import { Container } from "../components/designsystem/Container";
import { H1 } from "../components/designsystem/H1";
import { H2 } from "../components/designsystem/H2";
import { Button } from "../components/designsystem/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar title={5}></Navbar>
      <Container>
        <div className="flex flex-col items-center">
          <section className="mt-6">
            <H1>Take Notes Like Stories</H1>
          </section>
          <section className="mt-2">
            <H2>Now taking notes is more fun.</H2>
          </section>
          <div className="mt-12">
            <Link href="/note">
              <button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-6 md:px-8 py-2 font-semibold rounded border dark:text-textPrimaryDark text-textPrimary cursor-pointer tracking-wide text-sm md:text-base fo focus:outline-none tracking-wider border-none">
                Lets Start
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
