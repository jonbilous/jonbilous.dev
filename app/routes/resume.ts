import { redirect } from "@remix-run/react";
import resume from "~/assets/resume.pdf";

export const loader = async () => {
  return redirect(resume);
};
