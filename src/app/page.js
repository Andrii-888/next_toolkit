import Header from "@/components/header";
import ExampleClientComponent from "@/components/example/ExampleClientComponent";
import initTranslations from "./i18n";
import TranslationsProvider from "@/components/translationsprovider/TranslationsProvider";
import ProductsList from "@/components/productsList";
import Sidebar from "@/components/sidebar";
import SplashScreen from "@/components/splashscreen";
import Main from "@/components/main";
const i18nNamespaces = ["home"];

async function Home({ params: { lang: locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Main />
    </TranslationsProvider>
  );
}

export default Home;
