import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Summarize() {
  return (
    <>
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Summarizer</h1>
      <p className="text-lg">Summarize text from documents.</p>
    </main>
    <Footer />
    </>
  );
}
