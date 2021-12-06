const actions = {
  FETCH_DATA: 'FETCH_DATA',
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  FILES_UPLOAD: 'FILES_UPLOAD',
  FILE_DOWNLOAD: 'FILE_DOWNLOAD',
  filesUpload: files => ({
    type: actions.FILES_UPLOAD,
    files
  }),
}

export default actions;