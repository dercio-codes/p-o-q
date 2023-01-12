import { Auth } from "./../components/auth";
import { Suggestions } from "./../components/suggestions";
import { Models } from "./../components/models";
import { Appointments } from "./../components/appointments";

export default function Home() {
  return (
    <>
      <Auth />
      <Models />
      <Appointments />
      <Suggestions />
    </>
  );
}
