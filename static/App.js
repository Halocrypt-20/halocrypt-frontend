import {
  render,
  Component,
  Router,
  redirect,
  AsyncComponent,
} from "@hydrophobefireman/ui-lib";
import { init } from "./consoleOverrides";
import { handler } from "./authHandler";
import { CredLoadingFallBack, UnexpectedError } from "./fallbackComponents";
import DynamicHeader from "./components/_DynamicHeader";
import { appEvents } from "./globalStore";
import LazyRouteLoader from "./lazyRouteLoader";
// Importing all CSS
import "./device.css";
import "./components/Register/Register.css";
import "./components/Header/Header.css";
import "./components/MobileHeader/MobileHeader.css";
import "./components/LandingComponent/LandingComponent.css";
import "./components/Profile/Profile.css";
import "./components/Leaderboard/Leaderboard.css";
import "./components/Play/Play.css";
import "./components/_/Admin/Admin.css";
import "./components/Rules/Rules.css";
import "./components/Verify/Verify.css";
import "./forms.css";
import "./aquireB64.css";

init();
const store = appEvents.getStore();
class App extends Component {
  componentDidMount() {
    const qs = Router.qs;
    let c;

    if ((c = new URLSearchParams(qs).get("__loader"))) {
      redirect(c);
      return;
    }
  }
  render() {
    return (
      <>
        <DynamicHeader />
        <LazyRouteLoader />
      </>
    );
  }
}

handler.checkAuth();

const LoadApp = () => <App />;

const mount = document.getElementById("app-mount");

render(<LoadApp />, mount);
