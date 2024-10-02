const throwError = (err) => {
  if (!err) {
    throw new Error(`FS operation failed`);
  }

  throw new Error(err);
};

export default throwError;
