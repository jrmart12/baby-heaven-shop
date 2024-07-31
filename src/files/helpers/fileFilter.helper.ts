export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: (error: Error | null, acceptFile: boolean) => void,
) => {
  if (!file) return cb(new Error('File is Empty'), false);

  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
    return cb(null, true);
  }
  cb(null, false);
};
