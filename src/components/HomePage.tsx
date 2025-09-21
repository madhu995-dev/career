import Header from "@/components/Header";
import JourneySection from "@/components/JourneySection";

export default function HomePage() {
  return (
    <div id="top">
      <Header />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-100 to-blue-100 dark:from-gray-900 dark:to-gray-800">
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
          Welcome to Career Path
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Your one-stop career and education advisor.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-primary">Career Path</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            A comprehensive platform designed to address the critical need for
            accessible career guidance and educational opportunities across
            India. Our mission is to empower students by providing tailored
            recommendations, interactive tools, and resources that help them
            choose the right career path.
          </p>
        </div>
      </section>

      {/* WHERE ARE YOU IN YOUR JOURNEY */}
      <section id="journey">
        <JourneySection />
      </section>
    </div>
  );
}
