import Splash from "~/components/splash";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RPG Session Notes App" },
    { name: "description", content: "Welcome to RPG Session Notes!" },
  ];
}

export default function Home() {
  return <Splash />;
}
