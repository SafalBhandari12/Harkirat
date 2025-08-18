import { RecoilRoot } from "recoil";
import BackgroundChanger from "./pages/BackgroundChanger";
import LoginOtp from "./pages/LoginOtp";
import ParaGenerator from "./pages/ParaGenerator";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      {/* <ProfilePage /> */}
      {/* <BackgroundChanger /> */}
      {/* <ParaGenerator /> */}
      <RecoilRoot>
        <LoginOtp />
      </RecoilRoot>
    </>
  );
}
export default App;
