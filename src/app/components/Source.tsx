import React from "react";
import rectangule from "../../../public/assets/Image.svg";
import creamProduct from "../../../public/assets/image 38 2.svg";
import dropsProduct from "../../../public/assets/imageSerum.svg";
import { BiCheck } from "react-icons/bi";
import Image from "next/image";


const Source = () => {
    return (
        <section className="flex flex-col max-w-[1440px] w-[90%]  pt-24 m-auto lg:flex-row lg:items-center" id="products">
            <div className="lg:w-1/2 relative">
                <div className="flex justify-center">

                    <article className="text-left lg:w-[700px]  pb-4">
                        <h2 className="text-2xl font-semibold text-primary xl:text-4xl pb-4">
                            The power of Purity Source
                        </h2>
                        <p className="text-tertiary">
                            Inspired by hydration and Japan&#39;s beauty rituals, uruoi focuses on
                            the core elements of skincare to combine powerful ingredients backed
                            by science and authentically Japanese minimalist philosophy.
                        </p>
                        <p className="mt-6 text-tertiary">
                            A
                            blessing of water for every skin. Relieving dryness with gentle
                            touch.
                        </p>
                    </article>
                </div>
                <ul className="flex flex-col  justify-start text-left text-tertiary">
                    <li className="flex items-center justify-start gap-2">
                        <div className=" bg-secondary backdrop-opacity-10  flex justify-center items-center rounded-full h-[20px] w-[20px]">
                            <BiCheck />
                        </div>
                        <p>Our Cosmetics is 100% from Natural Ingredients</p>
                    </li>
                    <li className="flex items-center justify-start gap-2">
                        <div className=" bg-secondary backdrop-opacity-10 flex justify-center items-center rounded-full h-[20px] w-[20px]">
                            <BiCheck />
                        </div>
                        <p>All of packaging process by modern machine</p>
                    </li>
                    <li className="flex items-center justify-start gap-2">
                        <div className=" bg-secondary backdrop-opacity-10 flex justify-center items-center rounded-full h-[20px] w-[20px]">
                            <BiCheck />
                        </div>
                        <p>You can return our product if it&#39;s not original</p>
                    </li>
                </ul>
            </div>
            <div className="lg:w-1/2 relative" >
                <div className="relative lg:w-[350px] lg:ml-auto">
                    <div className="relative h-[400px] xl:h-[500px]  flex justify-center items-end">
                        <Image className="h-[75%] lg:h-[75%] " src={rectangule} alt="rectangule image" loading="lazy"/>
                        <div className="absolute top-[0] lg:top-0 ">

                            <Image className="pr-4 h-[350px]  lg:h-[350px] xl:h-[450px]" src={creamProduct} alt="cream-product" loading="lazy"/>
                        </div>
                    </div>
                    <div className="hidden absolute bottom-0 right-0 w-[250px]">

                        <div className="relative ">
                            <Image src={rectangule} alt="rectangule-image" loading="lazy"/>
                            <div className="absolute bottom-0 right-0">
                                <Image className="relative" src={dropsProduct} width={150} alt="dropsProduct" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Source;
