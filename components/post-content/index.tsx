import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Button, Card, Drawer, Grid, Typography } from "@mui/material";
import { Cancel } from "@mui/icons-material";
import NumberFormat from "react-number-format";
import ImageCarousel from "../image-carousel";
import { imagesMock } from "./data.d";
import useTheme from "../../hooks/useTheme";
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch, useSelector } from "react-redux";
import Hr from "../hr/hr.component";
import { deleteCar } from "../../redux/cars/car";
function PropertiesHeader({ showAdd, toggleShowAdd }) {
  const theme = useTheme();
  const data = useSelector(state => state.carReducers).eachCar;
  const user = useSelector(state => state.authReducers).user_details;
  const dispatch = useDispatch();

  const removeUplaod = () => {
    if (data) {
      return data.imgs ? data.imgs.map(el => {
        const img = el.split('/');
        img.shift()
        return { imgPath: img.join('/'), label: data.name };
      }) : [];
    } else {
      return []
    }

  }
  const handleDeleteCar = () => {
    dispatch(deleteCar(data._id)).then(res=>{
      toggleShowAdd()
    })
  }

  return (
    <>
      <Drawer
        anchor="right"
        open={showAdd}
        sx={{ width: "340px", maxWidth: 340 }}
        onClose={() => toggleShowAdd()}
      >
        <DrawerHeader>
          <div>
            <Typography variant="h4">Car Properties</Typography>
          </div>
          <div className="exit" onClick={() => toggleShowAdd()}>
            <Cancel style={{ fontSize: "30px" }} />
          </div>
        </DrawerHeader>
        {data && <DrawerBody style={{ width: "600px" }}>
          <ImageCarousel images={removeUplaod()} />
        </DrawerBody>}
        {data &&
          <DrawerFooter>
            <Grid container className="mt-5">
              <Grid item xs={6} md={4} lg={4}>
                <Typography variant="h5" className="mb-5" style={{ fontWeight: 500 }} >{data.name}</Typography>
              </Grid>
              <Hr />
              <Grid item xs={12} className="mt-2">
                <Typography variant="h6">Car Specs</Typography>
                <Grid container className="mt-5 ">
                  <Grid item xs={4}>
                    <SpecName name={'Max Power'} capacity={200} type={'hp'} theme={theme} />
                  </Grid>
                  <Grid item xs={4}>
                    <SpecName name={'Max Power'} capacity={200} type={'hp'} theme={theme} />
                  </Grid>
                  <Grid item xs={4}>
                    <SpecName name={'Max Power'} capacity={200} type={'hp'} theme={theme} />
                  </Grid>
                </Grid>
                <Typography variant="h6" className="" style={{ marginTop: 30 }}>Car Info</Typography>
                <Grid className="mt-5 ">
                  <Grid item xs={4} md={4} lg={4}>
                    <Typography><PersonIcon style={{ color: theme.colors.primary }} /> 2 passengers</Typography>
                  </Grid>
                  <Grid item xs={4} md={4} lg={4}>
                    <Typography><PersonIcon style={{ color: theme.colors.primary }} /> 2 passengers</Typography>
                  </Grid>
                  <Grid item md={4} lg={4}>
                    <Typography><PersonIcon style={{ color: theme.colors.primary }} /> 2 passengers</Typography>
                  </Grid>
                  <Grid item md={4} lg={4}>
                    <Typography><PersonIcon style={{ color: theme.colors.primary }} /> 2 passengers</Typography>
                  </Grid>
                  <Grid item md={4} lg={4}>
                    <Typography><PersonIcon style={{ color: theme.colors.primary }} /> 2 passengers</Typography>
                  </Grid>
                  <Grid item md={4} lg={4}>
                    <Typography><PersonIcon style={{ color: theme.colors.primary }} /> 2 passengers</Typography>
                  </Grid>
                  <Typography variant="h6" className="" style={{ marginTop: 30 }}>Car Description</Typography>
                  <Grid item md={4} lg={4}>
                    <Typography paragraph className="" style={{ marginTop: 5, whiteSpace: 'break-spaces' }}>{data.description}</Typography>
                  </Grid>
                  <Typography variant="h6" className="" style={{ marginTop: 30 }}>Car Location</Typography>
                  <Grid item xs={12} md={6} lg={6}>
                    <Typography paragraph className="" style={{ marginTop: 5, whiteSpace: 'break-spaces' }}>{data.country}, {data.city}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container className="absolute bottom-0 py-4 w-11/12">
              <Grid item xs={3}>
                <Typography variant="h5" fontWeight={600} style={{ color: theme.colors.light }}>
                  ${data.prize}
                </Typography>
              </Grid>
              <Grid item xs={9} className="flex-right">
                {user?._id === data?.userId ? <Button className="w-full bg-red-600" onClick={handleDeleteCar} variant="contained">
                  Delete Car
                </Button> : <Button className="w-full" variant="contained">
                  Contact Owner
                </Button>}
              </Grid>
            </Grid>
          </DrawerFooter>}
      </Drawer>
    </>
  );
}

export default PropertiesHeader;

PropertiesHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

const SpecName = ({ name, capacity, type, theme }: any) => (
  <Card sx={{ maxWidth: 150, minWith: 100, width: 120, p: 1 }}>
    <Typography color={theme.colors.light}>{name}</Typography>
    <Typography variant="h6" fontWeight={600}>{capacity}</Typography>
    <Typography color={theme.colors.light}>{type}</Typography>
  </Card>
)
const DrawerHeader = styled.div`
  position: relative;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #0404061a;
`;

const DrawerBody = styled.div`
  padding: 0px 30px;
  border-bottom: 1px solid #0404061a;

  .input-group {
    margin: 20px 0px;
    label {
      font-size: 13px;
    }
  }
  .rowUpload {
    display: flex;
    flex-direction: row;
    .col {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .imgPreview {
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f2f2f2;
        border-radius: 5px;
        margin-right: 10px;

        span {
          color: #7d7d7e;
          font-size: 25px;
        }
      }
      .upload_input {
        opacity: 0;
        position: absolute;
        z-index: -1000;
      }
      button {
        border: 1px solid #ccc;
        padding: 8px 10px;
        box-sizing: border-box;
        border-radius: 2px;
        background: transparent;
        margin: 10px 0px;
        cursor: pointer;

        span {
          color: #ff385c;
        }
      }
    }
  }

  .row4 {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 20px 10px;

    .col {
      display: flex;
      flex-direction: column;

      input {
        padding: 10px;
        border-radius: 8px;
        outline: none;
        border: 1px solid #ccc;
        width: 105px;
        margin-top: 5px;
        witdth: 155px;
      }
    }
  }

  .row1 {
    display: flex;
    margin: 5px 0px;

    button {
      padding: 10px;
      margin-left: 10px;
      border-radius: 8px;
      background: #ff385c;
      border: none;
      outline: none;
      cursor: pointer;
      color: #fff;
    }
  }

  input,
  textarea {
    padding: 10px;
    border-radius: 8px;
    outline: none;
    border: 1px solid #ccc;
    flex: 1;
  }

  select {
    padding: 8px 10px;
    border-radius: 8px;
    outline: none;
    border: 1px solid #ccc;
    flex: 1;
  }
`;

const DrawerFooter = styled.div`
  padding: 0px 30px;
  padding-bottom: 30px;

  .input-group {
    margin: 20px 0px;
    label {
      font-size: 13px;
    }
  }
  .row4 {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 20px 10px;

    .col {
      display: flex;
      flex-direction: column;

      input {
        padding: 10px;
        border-radius: 8px;
        outline: none;
        border: 1px solid #ccc;
        width: 105px;
        margin-top: 5px;
        width: 155px;
      }
    }
  }

  .row1 {
    display: flex;
    margin: 5px 0px;

    button {
      padding: 10px;
      margin-left: 10px;
      border-radius: 8px;
      background: #ff385c;
      border: none;
      outline: none;
      cursor: pointer;
      color: #fff;
    }
  }

  input {
    padding: 10px;
    border-radius: 8px;
    outline: none;
    border: 1px solid #ccc;
    flex: 1;
  }

  select {
    padding: 8px 10px;
    border-radius: 8px;
    outline: none;
    border: 1px solid #ccc;
    flex: 1;
  }

  .submit {
    button {
      font-size: 14px;
      font-weight: 400;
      width: 100%;
      padding: 10px 0px;
      background: #ff385c;
      color: #fff;
      border-radius: 8px;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
`;
