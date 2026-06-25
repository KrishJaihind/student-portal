import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100">

        <section className="max-w-7xl mx-auto px-6 py-20">

          <div className="text-center">

            <h1 className="text-5xl font-bold text-gray-900">
              Welcome to
            </h1>

            <h2 className="text-4xl text-blue-700 font-bold mt-3">
              New Generation High School
            </h2>

            <p className="mt-8 text-gray-600 text-lg max-w-2xl mx-auto leading-8">
              This student portal has been developed using
              Next.js and TypeScript. The application
              demonstrates reusable React components,
              responsive layout, and modern web design.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                Fast
              </h3>

              <p className="text-gray-600">
                Built with Next.js for better performance.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                Responsive
              </h3>

              <p className="text-gray-600">
                Works perfectly on desktop, tablet and mobile devices.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                Modern UI
              </h3>

              <p className="text-gray-600">
                Clean interface designed using Tailwind CSS.
              </p>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}