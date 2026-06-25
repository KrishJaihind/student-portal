export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold">
          New Generation High School
        </h1>

        <ul className="hidden md:flex gap-8 text-lg">
          <li className="hover:text-gray-200 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-gray-200 cursor-pointer transition">
            About
          </li>

          <li className="hover:text-gray-200 cursor-pointer transition">
            Contact
          </li>
        </ul>

      </div>
    </nav>
  );
}