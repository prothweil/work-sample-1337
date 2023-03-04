import Head from "next/head";
import { FilePicker } from "@components/FilePicker";
import { MobilePreview } from "@components/MobilePreview";
import { RecoilRoot } from "recoil";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Awesome Mobile Funnel Preview App</title>
        <meta name="description" content="Preview your funnels NOW" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <RecoilRoot>
          <FilePicker />
          <MobilePreview />
        </RecoilRoot>
      </main>
    </>
  );
}
