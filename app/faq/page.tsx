"use client"; // Mark the component as a client component

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Importing icons for the arrows

const Faq = () => {
  // State to manage which FAQ is open
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Function to toggle FAQ visibility
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // FAQ items specific to the Nagrik platform
  const faqs = [
    {
      question: "What is the Nagrik platform?",
      answer:
        "The Nagrik platform is a web-based application designed to empower Indian citizens by providing accurate and up-to-date information on rights, laws, and government schemes. It fosters civic awareness and engagement by allowing users to access modules like Rights & Laws, Relief Schemes, Feedback Systems, and more.",
    },
    {
      question: "How does the Nagrik platform enhance civic engagement?",
      answer:
        "The platform enhances civic engagement by facilitating easy access to polls, surveys, petitions, forums, and events. It encourages users to share opinions, provide feedback, and participate in meaningful dialogue to address community problems effectively.",
    },
    {
      question: "What topics are covered by the Nagrik platform?",
      answer:
        "The platform covers a wide range of topics, including health, education, environment, social welfare, laws, regulations, and government relief schemes. It aims to provide reliable information that impacts citizens' lives.",
    },
    {
      question: "Can I interact with other citizens on the platform?",
      answer:
        "Yes, the Nagrik platform allows citizens to interact with one another through forums, share feedback, participate in discussions, and collaborate on community initiatives.",
    },
    {
      question: "Is the Nagrik platform user-friendly?",
      answer:
        "Absolutely! The platform is designed to be user-friendly, interactive, and secure, ensuring a seamless experience for all users.",
    },
    {
      question: "Does the platform include AI-based features?",
      answer:
        "Yes, the Nagrik platform includes an AI-powered chat feature that allows users to ask questions and receive tailored answers about laws, rights, and government initiatives.",
    },
    {
      question: "How does the platform address citizen concerns?",
      answer:
        "The platform efficiently addresses citizen concerns by providing access to community resources, ensuring transparency in information, and enabling direct participation through feedback systems, surveys, and forums.",
    },
  ];

  return (
    <div className="h-full">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Frequently Asked Questions (FAQ)
        </h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg p-6 rounded-lg transition-all duration-300 ease-in-out ${
                openFAQ === index ? "border-l-4 border-gray-400" : ""
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {faq.question}
                </h2>
                <span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-6 w-6 text-gray-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-600" />
                  )}
                </span>
              </div>
              <div
                className={`mt-4 text-gray-600 transition-max-height duration-300 ease-in-out overflow-hidden ${
                  openFAQ === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
