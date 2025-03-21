import { PageTemplate } from "@/components/page-template"

export default function TermsOfUsePage() {
  return (
    <PageTemplate
      title="Terms of Use"
      description="The rules and guidelines for using our website and services."
      section="Terms of Use"
    >
      <div className="prose prose-blue dark:prose-invert max-w-none">
        <p>
          <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
        </p>

        <h2>Agreement to Terms</h2>
        <p>
          By accessing or using our website, you agree to be bound by these Terms of Use. If you disagree with any part
          of the terms, you may not access our website or use our services.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          The website and its original content, features, and functionality are owned by Highers Computing and are
          protected by international copyright, trademark, patent, trade secret, and other intellectual property or
          proprietary rights laws.
        </p>

        <h2>User Accounts</h2>
        <p>
          When you create an account with us, you must provide information that is accurate, complete, and current at
          all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of
          your account.
        </p>
        <p>
          You are responsible for safeguarding the password that you use to access our services and for any activities
          or actions under your password. You agree not to disclose your password to any third party.
        </p>

        <h2>Prohibited Uses</h2>
        <p>
          You may use our website only for lawful purposes and in accordance with these Terms. You agree not to use our
          website:
        </p>
        <ul>
          <li>In any way that violates any applicable national or international law or regulation.</li>
          <li>
            To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail",
            "chain letter", "spam", or any other similar solicitation.
          </li>
          <li>
            To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person
            or entity.
          </li>
          <li>
            In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or
            harmful.
          </li>
        </ul>

        <h2>Limitation of Liability</h2>
        <p>
          In no event shall Highers Computing, nor its directors, employees, partners, agents, suppliers, or affiliates,
          be liable for any indirect, incidental, special, consequential or punitive damages, including without
          limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or
          use of or inability to access or use the website.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
          material we will try to provide at least 30 days' notice prior to any new terms taking effect.
        </p>

        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <p>
          <strong>Email:</strong> terms@higherscomputing.com
          <br />
          <strong>Address:</strong> 123 Tech Street, Digital City, DC 12345
        </p>
      </div>
    </PageTemplate>
  )
}

