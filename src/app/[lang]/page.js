import Link from "next/link";
import styles from "./page.module.css";
import Header from "@/components/header";

import ExampleClientComponent from "@/components/example/ExampleClientComponent";
// import LanguageChanger from "@/components/Language/LanguageChanger";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/translationsprovider/TranslationsProvider";
import Footer from "@/components/footer";

const i18nNamespaces = ["home"];

async function Home({ params: { lang: locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Header />

      <main className={styles.main}>
        <h1>{t("header")}</h1>
        <ExampleClientComponent />
        <Link href="/about">{t("page2")}</Link>
      </main>
      <Footer />
    </TranslationsProvider>
  );
}

export default Home;
