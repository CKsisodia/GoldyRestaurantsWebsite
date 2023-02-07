import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { restaurantAction } from "../reducer/restaurantSlice";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function MenuList() {
  const menuListShow = useSelector((state) => state.restaurant.restaurantList);

  const dispatch = useDispatch();

  const incrementHandler = (item) => {
    dispatch(restaurantAction.increment(item));
  };

  const decrementHandler = (item) => {
    dispatch(restaurantAction.decrement(item));
  };

  return (
    <div>
      {menuListShow.map((item) => (
          <Paper
            key={item.id}
            sx={{
              p: 2,
              margin: "auto",
              marginTop: 3,
              maxWidth: 400,
              flexGrow: 1,
              borderRadius: 2,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img alt="complex" src={item.image} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      sx={{ marginLeft: 5, fontWeight: 700, fontSize: 20 }}
                    >
                      {item.foodItem}
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{ marginLeft: 4, marginTop: 2, gap: 2 }}
                    >
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => decrementHandler(item)}
                      >
                        -
                      </Button>
                      <span style={{ marginLeft: 5, marginRight: 5 }}>
                        {item.quantity}
                      </span>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => incrementHandler(item)}
                      >
                        +
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    {item.price}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
      ))}
    </div>
  );
}
