import { PageProps } from "./types";

const Page3: React.FC<PageProps> = ({height}) => {
  return (
    <div style={{height: `${height}vh`}}>
      <div className="w-screen h-screen flex justify-center items-center sticky top-0">
        <h1 className="text-3xl">Page 3</h1>
      </div>
    </div>
  );
};

export default Page3;