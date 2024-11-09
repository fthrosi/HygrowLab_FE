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
        <div className="flex flex-col min-h-screen py-[15rem] px-[18.75rem] items-center gap-[8.625rem]">
            <h1 className="font-nunito font-bold text-[2rem]">Frequently Asked Question</h1>
            <div className="flex flex-col gap-[1.875rem]">
                {faqs.map((faq, index) => (
                    <div key={index} className="flex justify-between shadow-md rounded-md py-[3.188rem] px-[2.438rem] w-[56rem] items-center">
                        <h1 className="font-nunito font-bold text-[1.5rem]">{faq.question}</h1>
                        <div className="shadow-md rounded-full size-[3.188rem] flex justify-center items-center">
                           <img src="/assets/icons/panah.png" alt="panah" /> 
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}