import Head from "next/head";
import Link from "next/link";
import { Breadcrumb } from "../components/elements";
import { Layout } from "../components/layout";

const Thanks = () => {
  return (
    <Layout>
      <Head>
        <title>Thanks!</title>
      </Head>

      {/* Start Thanks Section */}
      <section className="section text-center">
        <Breadcrumb title="Thank you for contacting me, I'll get back to you as soon as I can!" />
        <Link href="/">
          <a className="btn btn-large">
            <span>Back to home</span>
          </a>
        </Link>
      </section>
      {/* End NotFound Section */}
    </Layout>
  );
};

export default Thanks;
