import QRCode from "qrcode";

let options = {
  errorCorrectionLevel: "L",
  version: 2,
  maskPattern: 1,
};
// With promises
QRCode.toDataURL("I am a pony!", options)
  .then((url) => {
    console.log(url);
  })
  .catch((err) => {
    console.error(err);
  });

// With async/await
const generateQR = async (text) => {
  try {
    console.log(await QRCode.toDataURL(text));
  } catch (err) {
    console.error(err);
  }
};
