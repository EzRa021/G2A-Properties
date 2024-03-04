import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Faq = () => {
    const itemClasses = {
        base: "py-0  w-full",
        title: "font-normal  text-medium   ",
        trigger: "px-2 mx-0 py-0 data-[hover=true]:bg-orange rounded-lg h-14 flex w-full  items-center",
        indicator: "text-medium",
        content: "text-small px-2 ",
      };
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <>
            <div>
                <div className="xl:mx-[10rem] mx-[10px] sm:mt-32 mt-10">
                    <div className="xl:py-12 py-5 bg-[black] rounded-3xl">
                        <h1 className="xl:text-[3.5rem] text-[1rem] font-medium text-orange text-center">Frequently asked questions?</h1>
                    </div>
                    <p className="mt-5 text-[1rem] xl:px-14 px-[10px] font-medium">Embarking on a Real Estate Journey? Our Expert Advisers Provide Training Tips and Inspirational Insights. Need Information for Inspiration or Strategies to Succeed? Let’s Connect!</p>
                </div>
                <div className="xl:mx-[8rem] mx-[10px] mt-20 mb-20">
                    <Accordion variant="splitted" className="" itemClasses={itemClasses}>
                        <AccordionItem key="1" aria-label="Accordion 1" title="1. Q: How can I start the process of buying a property?">
                           <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quia consequuntur maxime, corrupti unde in a debitis dignissimos odio rem recusandae, tenetur aspernatur dolor pariatur repellat! Rem nesciunt tenetur iste.</h1>
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                            {defaultContent}
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </>
    );
}

export default Faq;