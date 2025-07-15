import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>BarkYQR Directory</title>
      </Head>
      <main className="p-6">
        <h1 className="text-3xl font-bold text-center">Welcome to BarkYQR 🐶</h1>
        <p className="text-center mt-4">Your Regina dog business directory is live.</p>
      </main>
    </>
  );
}
