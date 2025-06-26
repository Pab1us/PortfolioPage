import "./main.css";
import Main from "@/app/page";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Main />
      </body>
    </html>
  );
}
