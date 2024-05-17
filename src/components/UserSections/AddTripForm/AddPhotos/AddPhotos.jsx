import React, { useEffect, useRef, useState } from 'react';
import * as LR from '@uploadcare/blocks';
import '@uploadcare/blocks/web/lr-file-uploader-regular.min.css';

LR.registerBlocks(LR);

const AddPhotos = ({ onCdnUrlsChange }) => {
  const [files, setFiles] = useState([]);
  const [cdnUrls, setCdnUrls] = useState([]);
  const ctxProviderRef = useRef(null);

  useEffect(() => {
    const ctxProvider = ctxProviderRef.current;
    if (!ctxProvider) return;

    const handleChangeEvent = event => {
      const newFiles = event.detail.allEntries.filter(
        file => file.status === 'success'
      );
      setFiles(newFiles);
      setCdnUrls(prevCdnUrls => {
        const newUrls = newFiles.map(file => file.cdnUrl);
        const uniqueUrls = Array.from(new Set([...prevCdnUrls, ...newUrls]));
        return uniqueUrls;
      });
    };

    ctxProvider.addEventListener('change', handleChangeEvent);

    return () => {
      ctxProvider.removeEventListener('change', handleChangeEvent);
    };
  }, []);

  useEffect(() => {
    onCdnUrlsChange(cdnUrls);
  }, [cdnUrls]);

  return (
    <div>
      <lr-config ctx-name="my-uploader" pubkey="274c6cf9681b13936265" />

      <lr-file-uploader-regular ctx-name="my-uploader" />

      <lr-upload-ctx-provider ctx-name="my-uploader" ref={ctxProviderRef} />

      <div>
        {files.map(file => (
          <div key={file.uuid}>
            <img src={file.cdnUrl} alt={file.fileInfo.originalFilename} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddPhotos;

// import React, { useEffect, useRef, useState } from 'react';
// import * as LR from '@uploadcare/blocks';
// import '@uploadcare/blocks/web/lr-file-uploader-regular.min.css';

// LR.registerBlocks(LR);

// const UploadComponent = () => {
//   const [files, setFiles] = useState([]);
//   const ctxProviderRef = useRef(null);

//   useEffect(() => {
//     const ctxProvider = ctxProviderRef.current;
//     if (!ctxProvider) return;

//     const handleChangeEvent = event => {
//       setFiles([
//         ...event.detail.allEntries.filter(file => file.status === 'success'),
//       ]);
//     };

//     ctxProvider.addEventListener('change', handleChangeEvent);

//     return () => {
//       ctxProvider.removeEventListener('change', handleChangeEvent);
//     };
//   }, [setFiles]);

//   return (
//     <div>
//       <lr-config ctx-name="my-uploader" pubkey="274c6cf9681b13936265" />

//       <lr-file-uploader-regular ctx-name="my-uploader" />

//       <lr-upload-ctx-provider ctx-name="my-uploader" ref={ctxProviderRef} />

//       <div>
//         {files.map(file => (
//           <div key={file.uuid}>
//             <img src={file.cdnUrl} alt={file.fileInfo.originalFilename} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UploadComponent;
