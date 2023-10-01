import React from "react";
import FeaturedProjectData from "@/api/FeaturedProjectData/FeaturedProjectdata";
import Image from "next/image";

export default async function FeaturedProject() {
  const FProjectData1 = await FeaturedProjectData();
  const ftData = FProjectData1.slice(0, 1);
  const ftData1 = FProjectData1.slice(1, 5);
  console.log(ftData);
   const fontStyle={
    fontFamily: "Poppins, sans-serif", // Use "sans-serif" as a fallback font
    fontWeight: 900,
   }
  return (
    <>
      <div className=" h-[50.75rem] lg:h-[58.75rem] xl:h-[60.75rem] bg-[#F0FDF4]">
        <div>
          <div className="ml-[7rem]">
            <h1 className="position relative top-[3.81rem] text-[#20B15A] font-bold">Featured Project</h1>
            <h1 className="position relative top-[7.25rem] w-[30rem]" style={fontStyle}>
              We provide the Perfect Solution <br/>to your business growth
            </h1>
          </div>
          <div className="flex gap-[3rem] position relative top-[11rem]">
            <div className=" ml-[6.3rem]">
              {ftData.map((items, index) => (
                <div key={index}>
                  <h1></h1>
                  <Image src={items.image} width={1200} height={600} />
                  <div className="flex ">
                    <p>{items.remark}</p>
                    {/* <p className="ml-[3rem]">{items.updated_at}</p> */}
                  </div>
                  <h1 className="text-xl font-bold">{items.title}</h1>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:mr-[2rem] md:mr-[3.3rem] gap-3  ">
              {ftData1.map((items, index) => (
                <div key={index}>
                  <h1></h1>
                  <Image src={items.image} width={500} height={200} />
                  <div className="flex ">
                    <p>{items.remark}</p>
                    {/* <p className=" xl:ml-[3rem]">{items.updated_at}</p> */}
                  </div>
                  <h1 className="sm:text-sm text-xl font-bold">{items.title}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
