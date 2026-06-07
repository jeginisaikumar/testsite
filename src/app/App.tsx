import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Users,
  Shield,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import logo from "../imports/image.png";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt="iFinserve"
                className="h-12"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-[#123E6E] transition-colors"
              >
                About iFinserve
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-[#123E6E] transition-colors"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection("leadership")}
                className="text-gray-700 hover:text-[#123E6E] transition-colors"
              >
                Meet Our Leadership
              </button>
              <button
                onClick={() => scrollToSection("clients")}
                className="text-gray-700 hover:text-[#123E6E] transition-colors"
              >
                Our Clients
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2.5 bg-[#1DB954] text-white rounded-lg hover:bg-[#1aa84a] transition-colors"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-3">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 text-gray-700"
              >
                About iFinserve
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left py-2 text-gray-700"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection("leadership")}
                className="block w-full text-left py-2 text-gray-700"
              >
                Meet Our Leadership
              </button>
              <button
                onClick={() => scrollToSection("clients")}
                className="block w-full text-left py-2 text-gray-700"
              >
                Our Clients
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 px-4 bg-[#1DB954] text-white rounded-lg"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#123E6E] via-[#1a5a9e] to-[#123E6E] opacity-95"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(29, 185, 84, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl mb-6 leading-tight">
                Smart Financial Solutions for a{" "}
                <span className="text-[#1DB954]">
                  Digital Future
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Empowering global investors with expert
                guidance, seamless compliance, and trusted
                financial services. Your gateway to hassle-free
                cross-border investments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 bg-[#1DB954] text-white rounded-lg hover:bg-[#1aa84a] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Started <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 bg-white/10 text-white border-2 border-white rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all"
                >
                  Book Consultation
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmaW50ZWNoJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc5MTY4ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Financial Analytics Dashboard"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#F59E0B] text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-[#123E6E] mb-4">
              About iFinserve
            </h2>
            <div className="w-24 h-1 bg-[#1DB954] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                iFinserve is a specialized financial services
                firm led by industry veterans Madhu Menon and
                Gurunathan. With over a decade of experience and
                a strong client-first philosophy, we are
                committed to being a trusted partner for global
                investors—delivering clarity, compliance, and
                confidence in every financial decision.
              </p>
              <p>
                With a deep understanding of the complexities of
                international finance, we transform intricate
                regulatory and procedural requirements into
                seamless, end-to-end solutions. Our expertise
                lies in simplifying cross-border investments,
                ensuring that our clients can focus on their
                financial goals while we manage the
                complexities.
              </p>
              <p>
                We specialize in supporting Foreign Nationals
                (FNs), Overseas Corporate Bodies (OCBs),
                Non-Resident Indians (NRIs), and expatriates.
                Our dedicated team handles all aspects of
                regulatory compliance and documentation with
                precision and efficiency, enabling a smooth and
                hassle-free investment experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#1DB954] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <Shield
                    className="text-[#1DB954]"
                    size={24}
                  />
                </div>
                <h3 className="text-xl mb-2 text-[#123E6E]">
                  Trusted Partner
                </h3>
                <p className="text-gray-600 text-sm">
                  Over 15 years of combined experience
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#F59E0B] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp
                    className="text-[#F59E0B]"
                    size={24}
                  />
                </div>
                <h3 className="text-xl mb-2 text-[#123E6E]">
                  Proven Track Record
                </h3>
                <p className="text-gray-600 text-sm">
                  2,500+ successful account openings
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#5BC0BE] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-[#5BC0BE]" size={24} />
                </div>
                <h3 className="text-xl mb-2 text-[#123E6E]">
                  Client-First
                </h3>
                <p className="text-gray-600 text-sm">
                  Personalized end-to-end support
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#1DB954] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2
                    className="text-[#1DB954]"
                    size={24}
                  />
                </div>
                <h3 className="text-xl mb-2 text-[#123E6E]">
                  Global Reach
                </h3>
                <p className="text-gray-600 text-sm">
                  60+ corporate partnerships
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-[#123E6E] mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-[#1DB954] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions tailored for
              global investors
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-[#1DB954] hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#123E6E] rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2
                  className="text-white"
                  size={32}
                />
              </div>
              <h3 className="text-2xl mb-4 text-[#123E6E]">
                Onboarding & Compliance
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                iFinserve streamlines your entry into the Indian
                financial ecosystem with expert guidance on
                Demat account openings, PAN acquisition, and
                RBI-mandated filings.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="text-[#1DB954] flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <span>KYC & AML compliance management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="text-[#1DB954] flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <span>SEBI & RBI regulatory updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="text-[#1DB954] flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <span>FATCA & CRS compliance</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-[#1DB954] hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#1DB954] rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-2xl mb-4 text-[#123E6E]">
                ESOP Execution & Liquidation
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Get the best out of your ESOPs with our
                tailor-made expert assistance. From exercising
                options to liquidation and fund repatriation.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="text-[#1DB954] flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <span>Cross-border taxation management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="text-[#1DB954] flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <span>DTAA interpretation & application</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="text-[#1DB954] flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <span>1000+ ESOPs executed successfully</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-[#1DB954] hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#F59E0B] rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl mb-4 text-[#123E6E]">
                Tax-Aligned Remittance
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                All our remittances are entirely tax compliant,
                following all regulatory changes in a timely
                manner, reducing risks and improving efficiency.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="text-[#1DB954] flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <span>FEMA compliance management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="text-[#1DB954] flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <span>TDS calculation & filing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className="text-[#1DB954] flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <span>Fund repatriation support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section
        id="leadership"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-[#123E6E] mb-4">
              Meet Our Leadership
            </h2>
            <div className="w-24 h-1 bg-[#1DB954] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry veterans with decades of combined
              experience
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Leader 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="h-3 bg-gradient-to-r from-[#123E6E] to-[#1DB954]"></div>
              <div className="p-8">
                <div className="w-20 h-20 bg-[#123E6E] rounded-full flex items-center justify-center text-white text-2xl mb-4">
                  MM
                </div>
                <h3 className="text-2xl mb-2 text-[#123E6E]">
                  Madhu Menon
                </h3>
                <p className="text-[#1DB954] mb-4">
                  Managing Partner
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Senior Specialist in NRI, FN & OCB Financial
                  Services with over two decades of experience.
                  Personally handled 2,500+ account openings and
                  facilitated 1,000+ ESOP exercises.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#1DB954] rounded-full"></div>
                    <span>20+ years in financial broking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#1DB954] rounded-full"></div>
                    <span>2,500+ account openings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#1DB954] rounded-full"></div>
                    <span>60+ corporate partnerships</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Leader 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="h-3 bg-gradient-to-r from-[#1DB954] to-[#F59E0B]"></div>
              <div className="p-8">
                <div className="w-20 h-20 bg-[#1DB954] rounded-full flex items-center justify-center text-white text-2xl mb-4">
                  GN
                </div>
                <h3 className="text-2xl mb-2 text-[#123E6E]">
                  Gurunathan
                </h3>
                <p className="text-[#1DB954] mb-4">
                  Managing Partner
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Strategic Financial Consultant with three
                  decades of experience in portfolio analysis,
                  fund restructuring, and compliance advisory.
                  QPFP, NSE Goal Planner, and NISM-certified.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#F59E0B] rounded-full"></div>
                    <span>30+ years experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#F59E0B] rounded-full"></div>
                    <span>QPFP & NISM certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#F59E0B] rounded-full"></div>
                    <span>Compliance specialist</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Leader 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="h-3 bg-gradient-to-r from-[#F59E0B] to-[#5BC0BE]"></div>
              <div className="p-8">
                <div className="w-20 h-20 bg-[#F59E0B] rounded-full flex items-center justify-center text-white text-2xl mb-4">
                  JP
                </div>
                <h3 className="text-2xl mb-2 text-[#123E6E]">
                  Jeet Patel
                </h3>
                <p className="text-[#1DB954] mb-4">
                  Business Development Partner
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Over 30 years of cross-industry experience in
                  banking, automotive, eCommerce, and IT. Expert
                  in business operations, regulatory compliance,
                  and strategic development.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#5BC0BE] rounded-full"></div>
                    <span>30+ years experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#5BC0BE] rounded-full"></div>
                    <span>Multi-industry expertise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#5BC0BE] rounded-full"></div>
                    <span>Strategic partnerships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section
        id="clients"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-[#123E6E] mb-4">
              Our Clients
            </h2>
            <div className="w-24 h-1 bg-[#1DB954] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading organizations across industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              "Cyient Ltd",
              "Moschip Semiconductor Ltd",
              "Continental Coffee Ltd",
              "Neuland Laboratories Ltd",
              "Amarraja Energy and Mobility Ltd",
              "Oracle Financial Services Software Ltd",
              "Sai Life Sciences Ltd",
              "Divis Laboratories Ltd",
              "Natco Pharma Ltd",
              "Suven Pharma Ltd",
              "Cohance Lifesciences Ltd",
              "Vimta Labs Ltd",
              "HCL Technologies Ltd",
              "NIIT Ltd",
              "Persistent Technologies Ltd",
              "Cigniti Technologies Ltd",
              "Axiscades Technologies Ltd",
              "Apollo Hospitals",
              "Kernex Microsystems Ltd",
            ].map((client) => (
              <div
                key={client}
                className="bg-gray-50 rounded-xl p-6 flex items-center justify-center text-center hover:bg-[#123E6E] hover:text-white transition-all hover:scale-105 cursor-default"
              >
                <span className="text-sm">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#123E6E] to-[#1a5a9e] text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-[#1DB954] mx-auto mb-4"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Schedule a consultation and discover how iFinserve
              can simplify your financial journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1DB954] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Phone</h3>
                  <p className="text-gray-200">
                    Contact us for consultation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F59E0B] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Email</h3>
                  <p className="text-gray-200">
                    Send us your inquiries
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#5BC0BE] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Address</h3>
                  <p className="text-gray-200">
                    Visit our office location
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl mb-6">
                Send us a message
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-[#1DB954]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-[#1DB954]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-[#1DB954]"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-[#1DB954]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#1DB954] text-white rounded-lg hover:bg-[#1aa84a] transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f2d52] text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src={logo}
                alt="iFinserve"
                className="h-10 mb-4 brightness-0 invert"
              />
              <p className="text-sm text-gray-400">
                Your trusted partner for global financial
                services and cross-border investments.
              </p>
            </div>

            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-sm hover:text-[#1DB954] transition-colors"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block text-sm hover:text-[#1DB954] transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("leadership")}
                  className="block text-sm hover:text-[#1DB954] transition-colors"
                >
                  Leadership
                </button>
                <button
                  onClick={() => scrollToSection("clients")}
                  className="block text-sm hover:text-[#1DB954] transition-colors"
                >
                  Clients
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-white mb-4">Services</h4>
              <div className="space-y-2 text-sm">
                <p>Onboarding & Compliance</p>
                <p>ESOP Execution</p>
                <p>Tax-Aligned Remittance</p>
                <p>Fund Repatriation</p>
              </div>
            </div>

            <div>
              <h4 className="text-white mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <p>Phone: Contact for details</p>
                <p>Email: info@ifinserve.com</p>
                <p>Location: India</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} iFinserve. All
              rights reserved. | Smart Financial Solutions for a
              Digital Future
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}