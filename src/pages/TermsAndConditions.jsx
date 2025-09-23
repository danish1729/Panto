import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const TermsAndConditions = () => (
  <>
    <Navbar />
    <div className="min-h-screen bg-white px-6 py-16 pt-[100px]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold font-gilroy mb-6 text-[#1e1e1e]">
          Terms & Conditions
        </h1>
        <p className="mb-4 text-[#1e1e1e] font-gilroy opacity-80">
          Welcome to Panto. By accessing or using our website, you agree to be
          bound by these terms and conditions. Please read them carefully.
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-[#1e1e1e] font-gilroy opacity-80">
          <li>
            <strong>Use of Site:</strong> You may use this site for lawful
            purposes only.
          </li>
          <li>
            <strong>Intellectual Property:</strong> All content is owned by
            Panto and may not be reproduced without permission.
          </li>
          <li>
            <strong>Purchases:</strong> All sales are subject to our return and
            refund policy.
          </li>
          <li>
            <strong>Limitation of Liability:</strong> Panto is not liable for
            any damages arising from use of this site.
          </li>
          <li>
            <strong>Changes:</strong> We may update these terms at any time.
            Continued use of the site means you accept the changes.
          </li>
        </ol>
        <p className="mt-8 text-[#1e1e1e] font-gilroy opacity-80">
          If you have any questions about these terms, please contact us at
          hello@panto.com.
        </p>
      </div>
    </div>
    <Footer />
  </>
);

export default TermsAndConditions;
