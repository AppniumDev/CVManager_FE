import { SideMenu } from "./SideMenu";

const BaseLayout = ({ children }: any) => {
  return (
    <>
      <div className="flex flex-no-wrap">
        {/* Sidebar starts */}

        <SideMenu />

        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
          <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export { BaseLayout };
