export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          UNO USA — Built by Shanta: Quantum AI for Climate &amp; Energy Security
        </h1>
        <p className="mt-4 text-lg font-medium text-primary">
          Status: Live Demo Environment
        </p>
        <p className="mt-4 text-muted-foreground">
          SSGPT6 is a pilot-ready AI automation platform designed for secure,
          explainable, and scalable workflow modernization.
        </p>
        <a
          href="/demo"
          className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Open Demo
        </a>
      </div>
    </main>
  )
}