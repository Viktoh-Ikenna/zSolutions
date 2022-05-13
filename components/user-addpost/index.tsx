import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Drawer } from "@mui/material";
import { Cancel } from "@mui/icons-material";
import NumberFormat from "react-number-format";
import { addCar } from "../../redux/cars/car";
import { useDispatch } from "react-redux";

function AddPostSidebar({ addPropty, setAddPropty }) {
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
  const [pImg, setPImg] = useState({});
  const dispatch = useDispatch()
  const [success, setSuccess] = useState("");
  const [pending, setPending] = useState(false);

  // create a preview as a side effect, whenever selected file is changed
  const [viewFiles, setViewFiles] = useState();
  const [viewFiles1, setViewFiles1] = useState([]);
  const [newCommision, setNewCommision] = useState("");

  const {
    f_name,
    f_category,
    f_title,
    f_state,
    f_city,
    f_description,
    f_price,
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

          setViewFiles1([...looped]);
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

  const openImageSelectDialog = () => {
    imageRef.current.click();
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


  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(); //Create an instance of FormData // Loop through the files array and append to formData

    for (let i = 0; i < f_files.length; i++) {
      formData.append("theFiles", f_files[i]);
    }
    formData.append("brand", f_title);
    formData.append("name", f_name);

    formData.append("prize", f_price);
    formData.append("category", f_category);
    formData.append("description", f_description);
    formData.append("city", f_city);
    formData.append("country", f_state);
    formData.append("token", localStorage.getItem("zToken"))

    dispatch<any>(addCar(formData))
      .then((data) => {
        setPending(false);
        setAddPropty(false)
        setForm({
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
        })
      }
      )
  }
  // console.log(newCommision, "claaaaaas");
  const removeSelected = (id) => {
    setViewFiles1((prev) => [...prev.filter((el, i) => !(i === id))]);
    let newFileList = Array.from(f_files);
    newFileList.splice(id, 1);
    setForm((prev) => ({
      ...prev,
      f_files: newFileList,
    }));
  };

  return (
    <>
      {/* ============================================================ */}
      {/* Add new property */}
      {/* ============================================================ */}
      <Drawer
        anchor="right"
        open={addPropty}
        sx={{ width: "450px", maxWidth: 450 }}
        onClose={() => setAddPropty(false)}
      >
        <DrawerHeader>
          <div>
            <h1 style={{ marginBottom: "5px" }}>Add new car</h1>
            <p className="subText">Create a new car here.</p>
          </div>
          <div className="exit" onClick={() => setAddPropty(false)}>
            <Cancel style={{ fontSize: "30px" }} />
          </div>
        </DrawerHeader>
        <form onSubmit={handleSubmit}>
          <DrawerBody>
            <div className="input-group">
              <label>Name</label>
              <div className="row1">
                <input
                  type="text"
                  required
                  placeholder="Enter the property name"
                  defaultValue={f_name}
                  onChange={(e) => setForm({ ...form, f_name: e.target.value })}
                />
              </div>
            </div>

            <div className="input-group">
              <label>Brand</label>
              <div className="row1">
                <input
                  type="text"
                  required
                  placeholder="Enter a title document name"
                  defaultValue={f_title}
                  onChange={(e) =>
                    setForm({ ...form, f_title: e.target.value })
                  }
                />
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", maxWidth: 450 }}>
              {viewFiles1.map((item, i) => (
                <ImageCont key={i}>
                  <IconCancel
                    className="exit"
                    onClick={() => removeSelected(i)}
                  >
                    <Cancel style={{ fontSize: "20px" }} />
                  </IconCancel>
                  <img src={item} style={{ width: "100%", margin: "1% 1%" }} />
                </ImageCont>
              ))}

            </div>
            <div className="input-group">
              <label>Uploads</label>
              <div className="rowUpload" onClick={openImageSelectDialog}>
                <div className="col">
                  <div className="imgPreview">
                    {viewFiles ? (
                      <img
                        src={viewFiles}
                        alt="Preview"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <span>+</span>
                    )}
                  </div>
                </div>
                <div className="col">
                  <label className="properLabel">Property Image*</label>
                  <p className="uploadText">
                    Upload the image for this property
                  </p>
                  <input
                    className="upload_input"
                    type="file"
                    accept="image/*"
                    multiple
                    ref={imageRef}
                    onChange={(e) =>
                      setForm({ ...form, f_files: e.target.files })
                    }
                  />
                  <button>
                    <span>+</span> Select File
                  </button>
                </div>
              </div>
            </div>
          </DrawerBody>
          <DrawerBody>
            <div className="input-group">
              <div className="row4">
                <div className="col">
                  <label>Country</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter State"
                    defaultValue={f_state}
                    onChange={(e) =>
                      setForm({ ...form, f_state: e.target.value })
                    }
                  />
                </div>
                <div className="col">
                  <label>City</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter City"
                    defaultValue={f_city}
                    onChange={(e) =>
                      setForm({ ...form, f_city: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="input-group">
              <label>Description</label>
              <div className="row1">
                <textarea
                  rows="10"
                  required
                  placeholder="Enter description of property"
                  defaultValue={f_description}
                  onChange={(e) =>
                    setForm({ ...form, f_description: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
          </DrawerBody>
          <DrawerFooter>
            <div className="input-group">
              <label>Price</label>
              <div className="row1">
                <NumberFormat
                  value={f_price}
                  name={f_price}
                  displayType={"input"}
                  placeholder="Enter property price"
                  thousandSeparator={true}
                  prefix={"$"}
                  decimalSeparator="."
                  allowNegative={true}
                  // renderText={(value, props) => <div {...props}>{value}</div>}
                  // onValueChange={(e) =>
                  //   setForm({ ...form, f_price: e.target.value })
                  // }
                  onValueChange={(values) => {
                    const { value } = values;
                    // formattedValue = $2,223
                    // value ie, 2223
                    setForm({ ...form, f_price: value });
                  }}
                />
              </div>
            </div>

            <div className="submit">
              {success &&
                (success === "successful" ? (
                  <p
                    style={{ fontSize: "12px", color: "green", margin: "10px" }}
                  >
                    New Property: {success}
                  </p>
                ) : (
                  <p style={{ fontSize: "12px", color: "red", margin: "10px" }}>
                    New Property: {success}
                  </p>
                ))}
              {pending ? (
                <p
                  style={{
                    fontSize: "1.5rem",
                    background: "#ccc",
                    padding: "10px",
                    textAlign: "center",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Loading . . .
                </p>
              ) : (
                <button>Submit</button>
              )}
            </div>
          </DrawerFooter>
        </form>
      </Drawer>
    </>
  );
}

export default AddPostSidebar;

const DrawerHeader = styled.div`
  position: relative;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #0404061a;
`;
const ImageCont = styled.div`
  position: relative;
  width: 20%;
`;
const IconCancel = styled.div`
  position: absolute;
  top: 1px;
  right: 1px;
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

const InflowHeaderStyles = styled.div`
  padding-bottom: 25px;
  padding-top: 25px;

  .meta {
    display: flex;
    flex-direction: column;
    padding-left: 38px;

    h3 {
      color: var(--main-black);
      font-size: 32px;
      font-weight: 600;
      font-style: normal;
    }

    h5 {
      color: var(--gray-3);
      font-size: 15px;
      font-weight: 400;
      font-style: normal;
    }
  }
`;
const HeaderTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: start;
  }

  .tabs {
    margin-left: 20px;
    background: #eaeaea;
    display: flex;
    padding: 5px;
    border-radius: 6px;

    a {
      padding: 8px 15px;
      border-radius: 6px;
      text-decoration: none;
      color: #000;
    }
    .active {
      background: #fff;
    }
  }

  .PopButtons {
    display: flex;
  }
`;
const NewReferralButtonStyles = styled.button`
  border-radius: 8px;
  background-color: #ff385c;
  display: flex;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  padding: 7px 15px;
  margin-right: 38px;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;

  @media (max-width: 640px) {
    margin-top: 15px;
  }

  svg {
    margin-top: 9px;
    margin-left: 10px;
  }
  h5 {
    color: white;
  }
`;
