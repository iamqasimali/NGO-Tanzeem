import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import { useRouteSeo } from '../hooks/usePageSeo';

const Privacy = () => {
  useRouteSeo('/privacy');

  return (
    <div>
      <section className="pt-28 pb-12 bg-gray-50 border-b border-gray-200">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">Privacy Policy</h1>
            <p className="text-gray-600 text-sm">Last updated: April 2026</p>
          </motion.div>
        </Container>
      </section>

      <section className="py-12 bg-white">
        <Container>
          <div className="max-w-3xl">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Tanzeem Falah Insaniyat Khumra Roundu (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
                respects your privacy. This policy describes how we handle information when you visit
                our website or contact us.
              </p>

              <h2 className="text-xl font-bold text-primary-500 pt-2">Information we collect</h2>
              <p>
                When you use our contact form or email us, we may collect your name, email address,
                phone number, and the content of your message. When you subscribe to updates (if
                available), we collect the email address you provide.
              </p>

              <h2 className="text-xl font-bold text-primary-500 pt-2">How we use information</h2>
              <p>We use this information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to inquiries and support requests</li>
                <li>Process donations and send receipts where applicable</li>
                <li>Send newsletters or updates only if you have opted in</li>
                <li>Improve our programs and communications</li>
              </ul>

              <h2 className="text-xl font-bold text-primary-500 pt-2">Sharing of information</h2>
              <p>
                We do not sell your personal information. We may share information only when required
                by law, with service providers who assist our operations (under confidentiality), or
                with your consent.
              </p>

              <h2 className="text-xl font-bold text-primary-500 pt-2">Data security</h2>
              <p>
                We take reasonable steps to protect information submitted through our website. No
                method of transmission over the Internet is completely secure; we encourage you to
                avoid sending sensitive data by email unless necessary.
              </p>

              <h2 className="text-xl font-bold text-primary-500 pt-2">Your rights</h2>
              <p>
                You may request access to or correction of your personal information, or ask questions
                about this policy, by contacting us using the details on our{' '}
                <Link to="/contact" className="text-accent-600 underline hover:text-accent-700">
                  Contact
                </Link>{' '}
                page.
              </p>

              <h2 className="text-xl font-bold text-primary-500 pt-2">Changes</h2>
              <p>
                We may update this policy from time to time. The &quot;Last updated&quot; date at the
                top will reflect the latest revision.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Privacy;
