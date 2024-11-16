import { AuthProvider } from "@/components/context/AuthContext";
import '../global.css'

export const metadata = {
  title: "Trendify - Register",
  description: "Register for Trendify",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
