import { useSelector } from "react-redux";
import ChartComponent from "./chart/ChartComponent";
import LoginPage from "./LoginPage";
import Table from "./tabel/Table"
import { useEffect, useState } from "react";

const LandingPage = () => {

  const { userType } = useSelector((state) => ({ ...state.user }));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if(userType){
      setIsLoggedIn(true);
    }
  }, [userType])
  return (
    <div>
      {
        isLoggedIn ? <>
          <Table userType={userType} />
        </>
          :
          <LoginPage />
      }
    </div>
  )
}

export default LandingPage;
