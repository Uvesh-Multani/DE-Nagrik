import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Book, Handshake, HelpCircle, Megaphone, Users } from 'lucide-react';

// Section Components
const HeroSection = () => (
  <div className="px-4 text-center font-extrabold space-y-5">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
      Welcome to <span className="bg-custom-gradient bg-clip-text text-transparent">Nagrik</span>
    </h1>
    <p className="text-base sm:text-lg md:text-xl lg:text-2xl py-4 text-gray-700">
      Empowering Indian citizens with comprehensive information and engagement
    </p>
    <div className="flex flex-col md:flex-row justify-center items-center py-8 space-y-4 md:space-y-0 md:space-x-4">
      <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 rounded-full text-white">
        <Link href="/rights-and-laws">Explore Your Rights</Link>
      </Button>
      <Button asChild size="lg" variant="outline" className="bg-white text-green-600 border-green-600 rounded-full hover:bg-green-50">
        <Link href="/relief-schemes">Discover Schemes</Link>
      </Button>
    </div>
  </div>
);

const CardSection = () => (
  <section className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-10">
    {[
      {
        icon: <Book className="h-10 w-10 text-orange-500 mb-2" />,
        title: "Rights & Laws",
        description: "Understand your fundamental rights and important laws",
        link: "/rights-and-laws",
        linkText: "Learn More",
        bgColor: "bg-orange-50 border-orange-200",
        textColor: "text-orange-600",
      },
      {
        icon: <Handshake className="h-10 w-10 text-gray-600 mb-2" />,
        title: "Relief Schemes",
        description: "Explore government schemes you may be eligible for",
        link: "/relief-schemes",
        linkText: "View Schemes",
        bgColor: "bg-gray-50 border-gray-200",
        textColor: "text-gray-600",
      },
      {
        icon: <HelpCircle className="h-10 w-10 text-green-600 mb-2" />,
        title: "AI Chat Assistance",
        description: "Get instant answers to your civic questions",
        link: "https://nagrik-ai.vercel.app",
        linkText: "Start Chatting",
        bgColor: "bg-green-50 border-green-200",
        textColor: "text-green-600",
        external: true,
      },
    ].map(({ icon, title, description, link, linkText, bgColor, textColor, external }, index) => (
      <Card className={`${bgColor} border shadow-lg`} key={index}>
        <CardHeader>
          {icon}
          <CardTitle className={textColor}>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild variant="link" className={`${textColor} hover:${textColor}`}>
            <Link href={link} target={external ? '_blank' : '_self'}>
              {linkText} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    ))}
  </section>
);

const FeaturesSection = () => (
  <section className="px-4 bg-white p-8 rounded-lg py-16 shadow-md">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-600 mb-10">
      How Nagrik Empowers You
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {[
        { icon: <Users className="h-8 w-8 text-orange-500 mt-1" />, title: "Civic Engagement", description: "Participate actively in democratic processes and community development initiatives." },
        { icon: <Book className="h-8 w-8 text-green-600 mt-1" />, title: "Legal Awareness", description: "Stay informed about your rights and responsibilities as an Indian citizen." },
        { icon: <Handshake className="h-8 w-8 text-blue-600 mt-1" />, title: "Access to Benefits", description: "Easily find and apply for government schemes and programs you're eligible for." },
        { icon: <Megaphone className="h-8 w-8 text-purple-600 mt-1" />, title: "Voice Your Opinion", description: "Share feedback and participate in surveys to influence policy decisions." },
      ].map(({ icon, title, description }, index) => (
        <div className="flex items-start space-x-4" key={index}>
          {icon}
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const UpdatesSection = () => (
  <section className="px-4 py-16">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-600 mb-10">
      Latest Updates
    </h2>
    <div className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-md">
      <ul className="space-y-4">
        {[
          { label: "New", color: "bg-orange-100 text-orange-600", text: "Agricultural subsidy announced for small-scale farmers" },
          { label: "Update", color: "bg-blue-100 text-blue-600", text: "Amendments to the Right to Education Act proposed in parliament" },
          { label: "Launch", color: "bg-green-100 text-green-600", text: "New health insurance scheme for gig workers introduced" },
          { label: "Advisory", color: "bg-purple-100 text-purple-600", text: "Supreme Court issues new guidelines on environmental protection laws" },
        ].map(({ label, color, text }, index) => (
          <li className="flex items-center space-x-3" key={index}>
            <span className={`px-2 py-1 rounded text-sm font-medium ${color}`}>{label}</span>
            <p className="text-gray-700">{text}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const VideoSection = () => (
  <div className="px-4">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-600 mb-10">
    Featured Video
  </h2>
  <div className="relative w-full max-w-6xl mx-auto rounded-lg shadow-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
    <iframe
      src="https://www.youtube.com/embed/vphNJUa-C3U?si=FqnvGpmfi-6rettK"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>
  <div className="mt-6 px-6 md:px-12 lg:px-16 text-center">
    <p className="text-gray-500 text-base sm:text-lg md:text-xl font-medium">
      Understanding Your Rights as an Indian Citizen
    </p>
  </div>
</div>

);

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full text-gray-800 font-bold">
      <HeroSection />
      <CardSection />
      <FeaturesSection />
      <UpdatesSection />
      <VideoSection />
    </div>
  );
}
