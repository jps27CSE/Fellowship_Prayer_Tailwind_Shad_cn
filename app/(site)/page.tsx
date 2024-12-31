import Landing from "@/app/(site)/landing/page";

export default function Root() {
  const authentication = false; // Replace with actual authentication logic

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}

      {/* Content */}
      <main className="flex-grow  pb-20">
        {" "}
        {/* Add padding top to avoid overlap with fixed header */}
        {!authentication && <Landing />}
      </main>

      {/* Footer */}
      {/*<footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4">*/}
      {/*  <p className="text-center">Footer Content</p>*/}
      {/*</footer>*/}
    </div>
  );
}
