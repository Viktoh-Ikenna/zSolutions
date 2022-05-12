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
function PropertiesHeader({ showAdd, toggleShowAdd }) {
    const theme = useTheme();
    const [form, setForm] = useState({
        f_name: "",
        f_category: "Apartments",
        f_class: "",
        f_title: "",
        f_location: "",
        f_state: "",
        f_city: "",
        f_description: "",
        f_price: "",
        f_units: "",
        f_commision: "",
        f_files: null,
        f_banner: null,
    });

    const [success, setSuccess] = useState("");
    const [pending, setPending] = useState(false);

    // create a preview as a side effect, whenever selected file is changed
    const [viewFiles, setViewFiles] = useState();
    const [viewFiles1, setViewFiles1] = useState([]);
    const [newCommision, setNewCommision] = useState("");

    const {
        f_name,
        f_category,
        f_class,
        f_title,
        f_location,
        f_state,
        f_city,
        f_description,
        f_price,
        f_units,
        f_commision,
        f_files,
        f_banner,
    } = form;

    useEffect(() => {
        if (!f_files) {
            setViewFiles(null);
            return;
        } else {
            if (
                typeof f_files[0]?.url === "string" ||
                typeof f_files[1]?.url === "string"
            ) {
                setViewFiles(f_files[0]?.url || f_files[1]?.url);

                return;
            } else {
                if (f_files.length > 0) {
                    const looped: string[] = Object.keys(f_files).map(el => {
                        return URL.createObjectURL(f_files[el])
                    })
                    // console.log(looped);
                    // const objectUrl = URL.createObjectURL(f_files[0]);
                    setViewFiles(looped[0]);

                    setViewFiles1([...viewFiles1, ...looped]);
                    // console.log(objectUrl, "ks");
                    // free memory when ever this component is unmounted
                    // return () => URL.revokeObjectURL(objectUrl);
                }
                return;
            }
        }
    }, [f_files]);

    // create a preview as a side effect, whenever selected file is changed
    const [viewBanner, setViewBanner] = useState();
    useEffect(() => {
        if (!f_banner) {
            setViewBanner(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(f_banner);
        setViewBanner(objectUrl);

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl);
    }, [f_banner]);

    const imageRef = useRef(null);
    const bannerRef = useRef(null);

    const openImageSelectDialog = () => {
        imageRef.current.click();
    };

    const openBannerSelectDialog = () => {
        bannerRef.current.click();
    };
    const setClass = (e) => {
        console.log(e.target.value, "kkk");
        if (e.target.value === "Basic") {
            setNewCommision("25");
        }
        if (e.target.value === "Classic") {
            setNewCommision("15");
        }
        if (e.target.value === "Deluxe") {
            setNewCommision("5");
        }
        if (e.target.value === "Premium") {
            setNewCommision("2");
        }
    };
    // console.log(newCommision, "claaaaaas");

    return (
        <>
            <Drawer
                anchor="right"
                open={showAdd}
                sx={{ width: "340px" }}
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
                <DrawerBody style={{ width: "600px" }}>
                    <ImageCarousel images={imagesMock} />
                </DrawerBody>

                <DrawerFooter>
                    <Grid container className="mt-5">
                        <Grid item xs={12}>
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
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container className="absolute bottom-0 py-4 w-11/12">
                        <Grid item xs={3}>
                            <Typography variant="h5" fontWeight={600} style={{color:theme.colors.light}}>
                            $7000
                            </Typography>
                        </Grid>
                        <Grid item xs={9} className="flex-right">
                            <Button className="w-full" variant="contained">
                                Contact Owner
                            </Button>
                        </Grid>
                    </Grid>
                </DrawerFooter>
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
