import React, { useState } from "react";
import { lv, eng, RU } from "./common/languages";
import { areaData } from "./common/data";
import Main from "./main/main";
import Laukuiela from "./adrese/laukuiela";
import Pilsiela from "./adrese1/pilsIela";
import Factory from "./adrese3/factory";

let App = () => {
  let val;
  switch (localStorage.getItem("language")) {
    case "lv":
      val = lv;
      break;
    case "eng":
      val = eng;
      break;
    case "RU":
      val = RU;
      break;
    default:
      val = lv;
  }
  let [Language, setLanguage] = useState(val);

  let [ResourceType, setResourceType] = useState(Factory);

  return (
    <>
      <Main
        main={Language.main}
        locations={Language.locations}
        address1={"Lauku iela"}
        address2={"Pils iela"}
        address3={areaData[0].address}
        funcLoc1={() => {
          setResourceType(Laukuiela);
        }}
        info={Language.info}
        funcLoc2={() => {
          setResourceType(Pilsiela);
        }}
        funcLoc3={() => {
          setResourceType(Factory);
        }}
        gallery={Language.gallery}
        contacts={Language.contacts}
        language={Language.language}
        /*language change button's*/

        languageBtn={
          <>
            <button
              onClick={() => {
                setLanguage(lv);
                localStorage.setItem("language", "lv");
                window.location.reload();
              }}
              className="btn"
            >
              LV
            </button>
            <button
              onClick={() => {
                setLanguage(RU);
                localStorage.setItem("language", "RU");
                window.location.reload();
              }}
              className="btn"
            >
              RU
            </button>
            <button
              onClick={() => {
                setLanguage(eng);
                localStorage.setItem("language", "eng");
                window.location.reload();
              }}
              className="btn"
            >
              ENG
            </button>
          </>
        }
        phone_nr={"+371 00 000 000"}
        children={
          <>
            <div className="bg-contain">{ResourceType}</div>
          </>
        }
      />
    </>
  );
};

export default App;
