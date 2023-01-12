import { Auth } from "./../components/auth";
import { Suggestions } from "./../components/suggestions";
import { Models } from "./../components/models";
import { Appointments } from "./../components/appointments";

export default function HomePage() {
  return (
    <>
      {/* <Auth /> */}
      <Models />
      <Appointments />
      <Suggestions />
    </>
  );
}
