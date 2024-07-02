import {
  ChakraProvider,
  ComponentStyleConfig,
  extendTheme,
} from "@chakra-ui/react";
import { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Document from "./components/Document";
import AppShell from "./components/Shell";
import "./styles.css";
import { DESCRIPTION, NAME } from "./utils/constants";

const Heading: ComponentStyleConfig = {
  baseStyle: { fontWeight: "900" },
};

const theme = extendTheme({ components: { Heading } });

export const meta: MetaFunction = () => {
  return [{ title: NAME }, { name: "description", content: DESCRIPTION }];
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
