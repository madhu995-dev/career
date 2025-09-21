import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import QuizCTA from "@/components/QuizCTA";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Heart, Users, Award } from "lucide-react";

const Index = () => {
  const values = [
    {
      title: "Mission",
      description:
        "To democratize career guidance and educational opportunities for students across India, with special focus on Jammu & Kashmir.",
      icon: <Target className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Vision",
      description:
        "A world where every student has access to personalized career guidance and the resources to achieve their dreams.",
      icon: <Heart className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Community",
      description:
        "Building a supportive network of students, mentors, and professionals committed to educational excellence.",
      icon: <Users className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Innovation",
      description:
        "Leveraging cutting-edge AI and technology to create meaningful, personalized experiences for students.",
      icon: <Award className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* ✅ Hero First */}
        <Hero />

        {/* ✅ About Section */}
        <section
          id="about"
          className="py-20 px-6 lg:px-20 bg-gray-50 dark:bg-gray-900 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            About <span className="text-blue-600">Career Path</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-10"
          >
            A comprehensive platform designed to address the critical need for
            accessible career guidance and educational opportunities across India.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl font-semibold mb-4"
          >
            Why We Built This Platform
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-4xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed mb-16"
          >
            In today's rapidly evolving world, students face unprecedented
            challenges in choosing the right career path. Traditional approaches
            to career guidance often fall short, especially in regions like Jammu
            & Kashmir where access to resources can be limited.
            <br />
            <br />
            Our platform addresses these challenges by combining artificial
            intelligence, real-time data, and community-driven mentorship to
            provide personalized guidance that adapts to each student's unique
            needs and aspirations.
            <br />
            <br />
            We believe every student deserves access to quality career guidance,
            regardless of their location or economic background. This platform is
            our contribution to making that vision a reality.
          </motion.p>

          {/* Mission / Vision / Community / Innovation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, index) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
              >
                <div className="flex justify-center items-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-gray-700 rounded-full">
                    {val.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">{val.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ✅ Features */}
        <Features />



        {/* ✅ Project Highlights */}
        <section
          id="highlights"
          className="py-16 bg-white dark:bg-gray-900 text-center"
        >
          <h2 className="text-3xl font-bold mb-10">Project Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <p className="text-2xl font-bold text-blue-600">100%</p>
              <p className="text-gray-600 dark:text-gray-400">Free Access</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">24/7</p>
              <p className="text-gray-600 dark:text-gray-400">AI Support</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">Multi</p>
              <p className="text-gray-600 dark:text-gray-400">
                Language Support
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">AI</p>
              <p className="text-gray-600 dark:text-gray-400">Powered</p>
            </div>
          </div>
        </section>

        {/* ✅ Contact Section */}
       {/* ✅ Contact Section */}
<section
  id="contact"
  className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-950"
>
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold text-center mb-4"
  >
    Get in <span className="text-blue-600">Touch</span>
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
  >
    Have questions about our platform? Want to contribute to the project?  
    We’d love to hear from you!
  </motion.p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
    {/* Contact Form */}
    <motion.form
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="space-y-4 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md"
    >
      <input
        type="text"
        placeholder="Your name"
        className="w-full p-3 rounded-md border dark:bg-gray-800 dark:text-white"
      />
      <input
        type="email"
        placeholder="your.email@example.com"
        className="w-full p-3 rounded-md border dark:bg-gray-800 dark:text-white"
      />
      <input
        type="text"
        placeholder="What’s this about?"
        className="w-full p-3 rounded-md border dark:bg-gray-800 dark:text-white"
      />
      <textarea
        rows={4}
        placeholder="Tell us more about your inquiry..."
        className="w-full p-3 rounded-md border dark:bg-gray-800 dark:text-white"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition"
      >
        Send Message
      </button>
    </motion.form>

    {/* Contact Info */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md"
    >
      <div>
        <h3 className="text-lg font-semibold text-blue-600">Contact Information</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Email:{" "}
          <a
            href="mailto:contact@careerpath.in"
            className="text-blue-600 hover:underline"
          >
            contact@careerpath.in
          </a>
        </p>
        <p className="text-gray-600 dark:text-gray-400">Phone: +91 98765 43210</p>
        <p className="text-gray-600 dark:text-gray-400">Location: Jammu & Kashmir, India</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-blue-600">Project Information</h3>
        <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
          <li>
            <strong>Category:</strong> Education & Career Guidance
          </li>
          <li>
            <strong>Focus:</strong> Jammu & Kashmir, India
          </li>
          <li>
            <strong>Status:</strong> Active Development
          </li>
        </ul>
      </div>
    </motion.div>
  </div>
</section>

      </main>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default Index;
