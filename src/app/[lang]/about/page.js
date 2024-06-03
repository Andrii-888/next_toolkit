import Link from "next/link";
import ThemeToggle from "../../../components/ThemeToggle";

export const metadata = {
  title: "Contact page",
  description: "Generated for Contact page",
};

export default function About() {
  return (
    <>
      <div
        // className={`${currentTheme}`}
        style={{ textAlign: "center", marginTop: 50 }}
      >
        <h1 style={{ textAlign: "center", marginTop: 50 }}>About Page</h1>
        <br />
        <br />
        <br />
        <ThemeToggle />
        <br />
        <br />
        <Link href="/" style={{ textAlign: "center", color: "lightblue" }}>
          <h2>Back to home</h2>
        </Link>
        <Link
          href="/contact"
          style={{ textAlign: "center", color: "lightblue" }}
        >
          <h2>Go to contact</h2>
        </Link>
      </div>
    </>
  );
}
