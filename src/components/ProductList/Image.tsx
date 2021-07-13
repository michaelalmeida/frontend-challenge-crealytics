import axios from "axios";
import { useEffect, useState } from "react";
import { NoImage } from "./ProductList.styled";
import { FormattedMessage } from "react-intl";

const Image = ({ imageURL }: { imageURL: string }): JSX.Element => {
  const [status, setStatus] = useState("NOT_LOADED");
  const [imageFetched, setImageFetched] = useState<string>("");

  useEffect(() => {
    let isSubscribed = true;
    axios
      .get(imageURL, { responseType: "arraybuffer" })
      .then((res) => {
        const base64 = btoa(
          new Uint8Array(res.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );

        if (isSubscribed) {
          setImageFetched(`data:;base64,${base64}`);
          setStatus("LOADED");
        }
      })
      .catch((error) => {
        if (isSubscribed) {
          if (error.response.status !== 400) {
            setStatus("ERROR");
          } else {
            setImageFetched(imageURL);
            setStatus("LOADED");
          }
        }
      });

    return () => {
      isSubscribed = false;
    };
  }, [imageURL]);

  if (status === "NOT_LOADED") {
    return (
      <NoImage>
        <FormattedMessage id="loading-image" />
      </NoImage>
    );
  }

  return status === "LOADED" ? (
    <img src={imageFetched} />
  ) : (
    <NoImage>
      <FormattedMessage id="no-image" />
    </NoImage>
  );
};

export default Image;
