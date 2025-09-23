import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => (
  <>
    <Navbar />
    <div className="min-h-screen bg-white px-6 py-16 pt-[100px]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold font-gilroy mb-6 text-[#1e1e1e]">
          Privacy Policy
        </h1>
        <p className="mb-4 text-[#1e1e1e] font-gilroy opacity-80">
          Your privacy is important to us. This policy explains how Panto
          collects, uses, and protects your information.
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-[#1e1e1e] font-gilroy opacity-80">
          <li>
            <strong>Information Collection:</strong> We collect information you
            provide when you use our site or make a purchase.
          </li>
          <li>
            <strong>Use of Information:</strong> We use your information to
            process orders, improve our services, and communicate with you.
          </li>
          <li>
            <strong>Sharing:</strong> We do not share your personal information
            with third parties except as required by law.
          </li>
          <li>
            <strong>Security:</strong> We take reasonable measures to protect
            your data.
          </li>
          <li>
            <strong>Changes:</strong> We may update this policy. Please review
            it regularly.
          </li>
        </ol>
        <p className="mt-8 text-[#1e1e1e] font-gilroy opacity-80">
          For questions about our privacy practices, contact us at
          hello@panto.com.
        </p>
      </div>
    </div>
    <Footer />
  </>
);

export default PrivacyPolicy;
