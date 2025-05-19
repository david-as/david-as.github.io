import { i18n } from "@/i18n.config";
import { redirect } from "next/navigation";

export default async function RootPage() {
  redirect(`/${i18n.defaultLocale}`);
}
