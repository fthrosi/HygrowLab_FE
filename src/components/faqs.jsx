export default function Faqs() {
    const faqs = [
        {
            question: "Apa itu Hidroponik?",
        },
        {
            question: "Apa saja jenis hidroponik?",
        },
        {
            question: "Apa saja keuntungan hidroponik?",
        }
       
    ];
    return (
        <div className="flex flex-col min-h-screen xl:px-[clamp(15rem,18.75vw,18.75rem)] xl:py-[5.938rem] py-[clamp(5rem,25vw,6rem)] px-[clamp(1rem,5vw,2.5rem)] md:px-10 md:py-15 items-center xl:gap-[8.625rem] gap-[3rem]">
            <h1 className="font-nunito font-bold xl:text-[2rem] text-[clamp(1.5rem,7.5vw,2.5rem)] text-center lg:text-[1.75rem] md:text-[3.125vw]">Frequently Asked Question</h1>
            <div className="flex flex-col gap-[1.875rem]  md:w-[80%] xl:w-[80%]">
                {faqs.map((faq, index) => (
                    <div key={index} className="flex justify-between shadow-md rounded-md xl:py-[3.188rem] xl:px-[2.438rem] py-[1.5rem] px-[2rem] items-center">
                        <h1 className="font-nunito font-bold text-[clamp(1rem,5vw,1.5rem)] w-[70%] lg:text-[1.375rem] md:text-[2.08vw]">{faq.question}</h1>
                        <div className="shadow-md rounded-full xl:size-[3.188rem] size-9 flex justify-center items-center">
                           <img src="/assets/icons/panah.png" alt="panah" /> 
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}