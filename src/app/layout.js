import "./globals.css";

export const metadata = {
  title: "Sai Charan",
  description:
    "Exploare the portfolio of Sai Charan Hasnabad, a skilled full stack web developer. Discover Sai Charan's achievements, projects, and contact information. Get insights into Sai charan's expertise in technologies. Connect with Sai Charan to collaborate on exciting web development projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
