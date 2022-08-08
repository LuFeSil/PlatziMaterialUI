import { Avatar, Grid, Stack } from "@mui/material";
import React from "react";
import PrincipalInformation from "../../components/PrincipalInformation";
import Description from "../description";

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;
  return (
    <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
      <Grid item xs={3}>
        <Avatar
          alt="Git"
          src={avatar_url}
          sx={{
            width: "100%",
            height: "auto",
            marginLeft: "0.5rem",
          }}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack direction="column" spacing={1} sx={{ margin: "2rem" }}>
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default UserCard;
