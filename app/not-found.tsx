import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid bg-gray-800 h-full">
      <div className="text-center text-[#2fd0a8] text-2xl m-auto">
        <h2 className="m-auto">404 NOT FOUND</h2>
        <br />
        <Link
          href="/"
          className="text-[#2fd0a8] text-lg hover:text-[#a82fd0] hover:bg-gray-700 p-2 rounded transition-colors duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
