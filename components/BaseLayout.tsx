import { SideMenu } from "./SideMenu";

const BaseLayout = ({ children }: any) => {
  return (
    <>
      <div className="flex flex-no-wrap">
        {/* Sidebar starts */}
        {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}

        <SideMenu />

        {/* Sidebar ends */}
        {/* Remove class [ h-64 ] when adding a card block */}
        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
          {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
          <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export { BaseLayout };
