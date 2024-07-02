import type { MetaFunction } from "@remix-run/node";
import AppLayout from "~/components/Layout";
import { DESCRIPTION, NAME } from "~/utils/constants";

export const meta: MetaFunction = () => {
  return [{ title: NAME }, { name: "description", content: DESCRIPTION }];
};

export default function Index() {
  return <AppLayout>llolll</AppLayout>;
}
