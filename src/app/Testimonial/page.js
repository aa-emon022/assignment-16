"use client";
import React, { useEffect, useState } from "react";
import MenuContent from "@/components/(homePage)/menuContent/menuContent";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Subscribe from "@/components/(homePage)/Subscribe/Subscribe";
import Footer from "@/components/(homePage)/Footer/footer";
export default function Page() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  const [AllService, setAllService] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://agency.teamrabbil.com/api/TestimonialList"
        );
        const dataJson = await data.json();
        setAllService(dataJson);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(AllService);

  return (
    <>
      <section>
        <div className="h-[23.1rem] bg-[#F8F9FC]">
          <MenuContent />

          <div className="mt-[3rem] ml-[4rem]">
            <h1 className="text-[4rem] ">All Project</h1>
            <h1>
              Home{" "}
              {pathSegments.map((segment, index) => (
                <span key={segment}>
                  {index === 0 ? " > " : ""}
                  <span className="text-[#20B15A]">{segment}</span>
                </span>
              ))}
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="p-[3rem] ">
          <h1 className="text-[#20B15A] pb-[2rem]">All PROJECT</h1>
          <h1 className="font-bold">
            Better Agency/SEO Solution At <br /> Your Fingertips
          </h1>
        </div>
        <div className="grid grid-cols-3  gap-3  ml-[3rem] mr-[3rem]">
          {AllService.map((items, index) => (
            <div
              key={index}
              className=" sm:h-[50rem] md:h-[40rem] lg:h-[34rem] xl:h-[28rem] p-[2rem] shadow-md mb-[3rem] "
            >
              <div className=" flex-col justify-center items-center ">
                <Image
                  className="lg:ml-[2.81rem] xl:ml-[5rem] mt-[1rem] rounded-[1rem]"
                  src={items.image}
                  width={160}
                  height={500}
                />
                <p className=" pt-[1.5rem] pl-[1rem]  overflow-clip ">
                  {" "}
                  {items.msg}
                </p>
                <h1 className="pt-[1.5rem] text-[1.4rem] font-bold overflow-clip flex justify-center items-center">
                  {items.name}
                </h1>
                <h1 className="pt-[1.5rem] text-[1.4rem] font-bold overflow-clip flex justify-center items-center">
                  {items.designation}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Subscribe />
      <Footer />
    </>
  );
}

