import ImageKit from "@imagekit/nodejs";

const clientImageKit = new ImageKit({
  privateKry: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadImage(file) {
  const res = await clientImageKit.files.upload({
    file: file.buffer.toString("base64"),
    fileName: file.originalname,
  });
  return res;
}

export default uploadImage;
