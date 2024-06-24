// import styles from "./page.module.css";
import Header from "@/components/header";
import ExampleClientComponent from "@/components/example/ExampleClientComponent";
import initTranslations from "./i18n";
import TranslationsProvider from "@/components/translationsprovider/TranslationsProvider";
import ProductsList from "@/components/productsList";
import Sidebar from "@/components/sidebar";
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

      <main className="pt-20">
        <div className="mx-auto my-0 max-w-[1024px]">
          <div>
            <aside>
              <Sidebar />
            </aside>
          </div>
          <h1 className="text-[40px]">{t("header")}</h1>

          <ExampleClientComponent />
          <ProductsList />
        </div>
      </main>
    </TranslationsProvider>
  );
}

export default Home;

