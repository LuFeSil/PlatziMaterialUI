import React from "react";
import { Stack, Typography } from "@mui/material";
import PaperInformation from "../../components/PaperInformation";
import LocationInformation from "../../components/LocationInformation";

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <React.Fragment>
      <Stack sx={{ justifyContent: "center" }}>
        {bio !== null ? (
          <Typography variant="body1">{bio}</Typography>
        ) : (
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            obcaecati cupiditate, velit temporibus beatae unde eius veritatis
            fuga modi, harum optio voluptatem repellat. Ad at, tempore debitis
            distinctio fugiat tenetur!
          </Typography>
        )}
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </React.Fragment>
  );
};

export default Description;
