export default function Demo() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          SSGPT6 Demo
        </h1>
        <p className="mt-4 text-gray-600">
          Experience the power of Quantum AI for Climate &amp; Energy Security.
        </p>
        <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Platform Features</h2>
          <ul className="mt-4 space-y-2 text-left text-gray-600">
            <li>Secure AI automation workflows</li>
            <li>Explainable decision-making</li>
            <li>Scalable infrastructure</li>
            <li>Climate and energy analytics</li>
          </ul>
        </div>
        <a
          href="/"
          className="mt-6 inline-block rounded-md bg-gray-800 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-900"
        >
          Back to Home
        </a>
      </div>
    </main>
  )
}