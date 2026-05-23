import ImageKit from "@imagekit/nodejs";

const clientImageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadImage(file) {
  const res = await clientImageKit.files.upload({
    file: file.buffer.toString("base64"),
    fileName: `${Date.now()}-${file.originalname}`,
  });
  return res;
}

async function deleteImage(fileId) {
  return await clientImageKit.files.delete(fileId);
}

export { uploadImage, deleteImage };
