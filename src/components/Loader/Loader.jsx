import { ColorRing } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.style';

const Loader = () => {
  return (
    <>
      <LoaderWrapper>
        <ColorRing
          visible={true}
          height="120"
          width="120"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </LoaderWrapper>
    </>
  );
};

export default Loader;
