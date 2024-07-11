import { ChakraProvider } from "@chakra-ui/react";
import { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Document from "./components/Document";
import AppShell from "./components/Shell";
import { seo } from "./content/general";
import "./styles.css";
import { theme } from "./utils/theme";

export const meta: MetaFunction = () => {
  return [
    { title: seo.title },
    { name: "description", content: seo.description },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return <Document>{children}</Document>;
}

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppShell>
        <Outlet />
      </AppShell>
    </ChakraProvider>
  );
}
